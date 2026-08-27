import { Question } from "./types";

import { chesapeakeBayQuestions } from "./chesapeakeBay";
import { blueCrabQuestions } from "./blueCrabs";
import { blueCatfishQuestions } from "./blueCatfish";
import { easternOysterQuestions } from "./easternOysters";
import { salmonRASQuestions } from "./salmonRAS";
import { fishingAndCrabbingQuestions } from "./fishingAndCrabbing";
import { seafoodHealthQuestions } from "./seafoodHealth";
import { S3AMQuestions } from "./S3AM";

export type { Question };

export const questions: Question[] = [
    ...chesapeakeBayQuestions,
    ...blueCrabQuestions,
    ...blueCatfishQuestions,
    ...easternOysterQuestions,
    ...salmonRASQuestions,
    ...fishingAndCrabbingQuestions,
    ...seafoodHealthQuestions,
    ...S3AMQuestions,
];