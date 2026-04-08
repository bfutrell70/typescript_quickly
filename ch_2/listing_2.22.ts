// page 35 - Listing 2.22 - Using a union to represent actions in the actions.ts file
export class SearchAction {
    actionType = "SEARCH";

    constructor(readonly payload: {searchQuery: string}) {}
}

export class SearchSuccessAction {
    actionType = "SEARCH_SUCCESS";

    constructor(readonly payload: {searchResults: string}) {}
}

export class SearchFailedAction {
    actionType = "SEARCH_FAILED";
}

export type SearchActions = SearchAction | SearchSuccessAction | SearchFailedAction;

