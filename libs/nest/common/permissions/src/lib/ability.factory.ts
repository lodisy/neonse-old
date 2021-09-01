import { Ability, MongoQuery, SubjectRawRule, SubjectType } from '@casl/ability'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AbilityFactory {
    createForUser(
        permissions: SubjectRawRule<string, SubjectType, MongoQuery<Record<string | number | symbol, unknown>>>[],
    ): Ability {
        return new Ability(permissions)
    }
}
