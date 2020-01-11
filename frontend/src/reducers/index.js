import { GENERATION_ACTION_TYPE } from '../actions/types';

const DEFAULT_GENERATION = { generatinId: '', expiration: ''};

export const generationReducer = (state, action) => {
    if (action.type === GENERATION_ACTION_TYPE) {
        return { generation: action.generation };
    }

    return { generation: DEFAULT_GENERATION };
}
