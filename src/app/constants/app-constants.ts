export const REST_API_CONTEXT_PATHS: any = {
 // DOCUMENT_VERIFIER_REST_URL: '/external/verification/api/v1.0',
 EXPENSES_DATA_REST_URL: '/items/expenses',
 ADD_DETAILS_REST_URL: '/items/expenses',
}

export const REST_API_PATHS: any = {
  EXPENSES_DATA: { rest: '{0}', isMockRequired: true },
  VERIFY_DOCUMENTAR: { rest: '{0}/{1}?lang=ar', isMockRequired: true },
}

export enum URLS {
  EXPENSES_DATA = "EXPENSES_DATA",
}


