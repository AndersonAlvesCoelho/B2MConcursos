import { Sequelize } from "sequelize";
import dbConfig from "../config/database";

//BD b2mconcursos
import Bank from "../models/Bank";
import Institution from "../models/Institution";

import OfficeNiv01 from "../models/office/OfficeNiv01";
import OfficeNiv02 from "../models/office/OfficeNiv02";
import OfficeNiv03 from "../models/office/OfficeNiv03";
import OfficeNiv04 from "../models/office/OfficeNiv04";

import Dicipline from "../models/subject/Dicipline";
import SubjectNiv01 from '../models/subject/SubjectNiv01';
import SubjectNiv02 from '../models/subject/SubjectNiv02';
import SubjectNiv03 from '../models/subject/SubjectNiv03';
import SubjectNiv04 from '../models/subject/SubjectNiv04';
import SubjectNiv05 from '../models/subject/SubjectNiv05';
import SubjectNiv06 from '../models/subject/SubjectNiv06';
import SubjectNiv07 from '../models/subject/SubjectNiv07';

import Office from "../models/Office";
import DisciplineSubject from "../models/DisciplineSubject";
import Question from "../models/Question";
import Alternative from "../models/Alternative";
import User from "../models/User";
import Comment from "../models/Comment";
import CommentAnswer from "../models/CommentAnswer";
import UserAnswersQuestion from "../models/UserAnswersQuestion";

// tabelas do banco de dados
const modelsDbB2mConcursos = [    
    OfficeNiv01,
    OfficeNiv02,
    OfficeNiv03,
    OfficeNiv04,
    
    Dicipline,
    SubjectNiv01,
    SubjectNiv02,
    SubjectNiv03,
    SubjectNiv04,
    SubjectNiv05,
    SubjectNiv06,
    SubjectNiv07,
    
    Bank,
    Institution,
    Office,
    DisciplineSubject,
    Question,
    Alternative,
    User,
    Comment,
    CommentAnswer,
    UserAnswersQuestion,
];

class Database {
    constructor() {
        this.init();
    }
    init() {
        // models para o banco b2mconcursos
        const dbB2mConcursos = new Sequelize(dbConfig["development"]);
        modelsDbB2mConcursos
            .map((model) => model.init(dbB2mConcursos))
            .map((model) => {
                if (model.associate) model.associate(dbB2mConcursos.models);
                return model;
            });
    }
}
export default new Database();
