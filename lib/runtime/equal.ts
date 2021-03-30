// https://github.com/ajv-validator/ajv/issues/889
import * as equal from "fast-deep-equal"

type Equal = typeof equal & {code: string; importParameters: {package: string; name: string}}
;(equal as Equal).code = 'require("ajv/dist/runtime/equal").default'
;(equal as Equal).importParameters = {
  package: "ajv/dist/runtime/equal",
  name: "default",
}

export default equal as Equal
