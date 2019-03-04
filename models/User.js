import { Model } from '@vuex-orm/core'

export default class User extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'usersEntities'
 
  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      id: this.attr(null),
      name: this.attr(''),
      username: this.attr(''),
      email: this.attr(''),
      address: this.attr(''),
      phone: this.attr(''),
      company: this.attr(''),
    }
  }
}

 