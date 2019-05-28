import gql from "graphql-tag";

import {fragmentA} from "./fragmentA";

export const fragmentB = gql`fragment bFields on B {
    id
}
`;

export const fragmentC = gql`fragment cFields on C {
    ...aFields
}
${fragmentA}`;
