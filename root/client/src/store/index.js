import {configureStore} from '@reduxjs/toolkit';

import appReducer from './appState';
import minionsReducer from './minions';
import meetingsReducer from './meetings';
import ideasReducer from './ideas';
import selectedMinionReducer from './selectedMinion';
import selectedIdeaReducer from './selectedIdea';
import workReducer from './work';

export const store = configureStore({
        reducer: {
            minions: minionsReducer,
            meetings: meetingsReducer,
            app: appReducer,
            // ideas: ideasReducer,
            selectedMinion: selectedMinionReducer,
            // selectedIdea: selectedIdeaReducer,
            // work: workReducer,
        }
    }
);
