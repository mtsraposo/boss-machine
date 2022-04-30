import {configureStore} from '@reduxjs/toolkit';

import minionsReducer from './minions';
import meetingsReducer from './meetings';
import ideasReducer from './ideas';
import selectedMinionReducer from './selectedMinion';
import selectedIdeaReducer from './selectedIdea';
import workReducer from './work';
import appStateReducer from './appState';

export const store = configureStore({
        reducer: {
            minions: minionsReducer,
            meetings: meetingsReducer,
            // ideas: ideasReducer,
            // selectedMinion: selectedMinionReducer,
            // selectedIdea: selectedIdeaReducer,
            // work: workReducer,
            // appState: appStateReducer,
        }
    }
);
