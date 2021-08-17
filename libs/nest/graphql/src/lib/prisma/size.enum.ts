import { registerEnumType } from '@nestjs/graphql'

export enum Size {
    XS = 'XS',
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL',
    IT44 = 'IT44',
    IT46 = 'IT46',
    IT48 = 'IT48',
    IT50 = 'IT50',
    IT52 = 'IT52',
    OS = 'OS',
    JP0 = 'JP0',
    JP1 = 'JP1',
    JP2 = 'JP2',
    JP3 = 'JP3',
    JP4 = 'JP4',
    EU41 = 'EU41',
    EU42 = 'EU42',
    EU43 = 'EU43',
    EU44 = 'EU44',
    EU45 = 'EU45',
}

registerEnumType(Size, { name: 'Size' })
