
import './style.scss';

import { listenSocial } from "./common.blocks/footer/footer";
import { listClick } from "./common.blocks/questionsList/questions-list";
import { addQuestionsAskListener } from "./common.blocks/questions/questions";
import { addModalCloseButtonListener } from "./common.blocks/modal/modal";

listenSocial();
listClick();
addQuestionsAskListener();
addModalCloseButtonListener();