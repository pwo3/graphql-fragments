import gql from "graphql-tag";

import {fragmentB} from "./fragmentB";

export const fragmentA = gql`fragment aFields on A {
    ...bFields
}
${fragmentB}`;
