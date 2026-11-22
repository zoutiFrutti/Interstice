// Adapted from PR161 0b5fb49: browser history remains the source of truth.
// Pure candidate state. No browser event handlers or public route changes.
import {DOOR_IDS} from './graph-data.mjs';

export const initialState = () => ({view: 'overview', doorId: null, parcoursId: null, stepId: null, history: []});
const locationOf = state => ({view: state.view, doorId: state.doorId, parcoursId: state.parcoursId, stepId: state.stepId});

export function readFragment(fragment, bundle) {
  let value;
  try { value = decodeURIComponent(String(fragment).replace(/^#/, '')); } catch { return {kind: 'overview'}; }
  if (Object.hasOwn(bundle.navigation.historical_fragments, value)) return {...bundle.navigation.historical_fragments[value]};
  const match = /^parcours\/(PAR-\d{3})(?:\/([a-z0-9-]+))?$/.exec(value);
  if (!match) return {kind: 'overview'};
  const path = bundle.parcours.find(path => path.id === match[1]);
  if (!path) return {kind: 'overview'};
  if (match[2] && !path.steps.some(step => step.id === match[2])) return {kind: 'overview'};
  return {kind: 'parcours', id: path.id, stepId: match[2] || path.steps[0].id};
}

export function navigate(state, action, bundle) {
  if (action.type === 'BACK') {
    if (!state.history.length) return initialState();
    return {...state.history.at(-1), history: state.history.slice(0, -1)};
  }
  if (action.type === 'RESTORE_FRAGMENT') {
    const target = readFragment(action.fragment, bundle);
    if (target.kind === 'door') return {...initialState(), view: 'door', doorId: target.id};
    if (target.kind === 'parcours_index') return {...initialState(), view: 'parcours_index'};
    if (target.kind === 'parcours') return {...initialState(), view: 'step', parcoursId: target.id, stepId: target.stepId};
    return initialState();
  }
  let destination;
  if (action.type === 'OVERVIEW') destination = initialState();
  else if (action.type === 'DOOR' && DOOR_IDS.includes(action.id)) destination = {...initialState(), view: 'door', doorId: action.id};
  else if (action.type === 'PARCOURS_INDEX') destination = {...initialState(), view: 'parcours_index'};
  else if (action.type === 'PARCOURS') {
    const path = bundle.parcours.find(path => path.id === action.id);
    if (!path) throw new Error('Parcours inconnu');
    destination = {...initialState(), view: 'step', parcoursId: path.id, stepId: path.steps[0].id};
  } else if (action.type === 'STEP') {
    const path = bundle.parcours.find(path => path.id === state.parcoursId);
    const current = path?.steps.find(step => step.id === state.stepId);
    if (!current || ![...current.next_step_ids, ...current.return_step_ids].includes(action.id)) throw new Error('Bifurcation ou retour non défini');
    destination = {...locationOf(state), stepId: action.id};
  } else throw new Error('Destination inconnue');
  return {...destination, history: [...state.history, locationOf(state)]};
}
