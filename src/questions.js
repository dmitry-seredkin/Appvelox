


import './questions.scss';

import { addSocialListener } from "./common.blocks/footer/footer";
import { addQuestionListListener } from "./common.blocks/questions-list/questions-list";
import { addQuestionsAskListener } from "./common.blocks/questions/questions";
import { addModalCloseButtonListener } from "./common.blocks/modal/modal";


addQuestionListListener();
addQuestionsAskListener();
addModalCloseButtonListener();
addSocialListener();
