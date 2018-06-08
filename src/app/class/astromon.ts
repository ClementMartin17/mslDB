export class Astromon {
    astromon_id: string;
    grade: number;
    name: string[];
    element: string;
    hp: number;
    atk: number;
    def: number;
    rec: number;
    critdmg: number;
    critrate: number;
    resi: number;
    variant: Variant;
    normal: Normal;
    active: Active;
}

/*----------LEADER----------*/
class Variant {
    name: string;
    values: any[];
    text: any[];
}

/*----------SPELL----------*/
class Normal {
    name: string;
    power: Power;
    passive: Passive;
}
class Active {
    name: string;
    power: Power;
    passive: Passive;
    activeaoe: boolean;

}

/*----------VALUE SKILL----------*/
class Power {
    value: number;
    skillbook: number;
}

class Passive {
    name: string;
    values: any[];
    text: any[];
}
