export interface Procedure {
    procedure_id: any,
    name: string,
    price: number,
    hospital_name: string,
    hospital_city: string,
    hospital_state: string,
    hospital_rating: number,
    heal_time: number,
    contributor_id: number
}


export interface SearchProcedureRespose {
    procedures: Array<Procedure>
    stats: {
        avgPrice: number
        avgHealTime: number
    }
}


export interface User {
    id: number
    username: string
    authCount: number
}
