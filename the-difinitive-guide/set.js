let Set = function() {
    this.values = {}
    this.n = 0
    this.__proto__.add = () => {
        for (let i = 0; i < arguments.length; i++) {
            let val = arguments[i]
            let str = Set._v2s(val)
            if (!this.values.hasOwnProperty(str)) {
                this.values[str] = val
                this.n++
            }
        }
        return this
    }
    this.__proto__.remove = () => {
        for (let i = 0; i < arguments.length; i++) {
            let val = arguments[i]
            let str = Set._v2s(val)
            if (this.values.hasOwnProperty(str)) {
                delete this.values[str]
                this.n--
            }
        }
        return this
    }

    this.__proto__.contains = (value) => {
        return this.values.hasOwnProperty(Set._v2s(value))
    }

    this.__proto__.size = () => {
        return this.n
    }

    this.__proto__.foreach = (f, context) => {
        for (var s in this.values) {
            if (this.values.hasOwnProperty(s)){
                f.call(context, this.values[s])
            }
        }
    }
    this.add.apply(this,arguments)
}

Set._v2s = (val) => {    
    var objectId = o => {
        let prop = "|**objectid**|"
        if (!o.hasOwnProperty(prop)) {
            return Set._v2s.next++
        }
        //return o[prop]
    }
    switch (val) {
        case undefined:     return 'u'
        case null:          return 'n'
        case true:          return 't'
        case false:         return 'f'
        default:switch (typeof val) {
            case 'number':  return '#'+val
            case 'string':  return '"'+val
            default:        return '@'+objectId(val)
        }
    }    
}
Set._v2s.next = 100
var s = new Set(1,2,3,{},{},{a:1},null,undefined,false,true,"123")
s.foreach((value) => {
    console.log(value)
},this)
debugger