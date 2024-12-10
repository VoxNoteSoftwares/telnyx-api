const fs = require('fs')

// Patch issue with 2 types that are not generated correctly
// TODO: Actually should find what the types are supposed to be an append the missing types.
let content = fs.readFileSync('./generated/api.ts', 'utf8')
content = content.replace(/\bValidateAddress\b/g, 'ValidateAddressRequest')
content += `
export interface PhoneNumber {
    phone_number: string;
    requirement_group_id?: string;
    bundle_id?: string;
}
`
fs.writeFileSync('./generated/api.ts', content)

// Delete the generated files that are not needed
fs.rmSync('./generated/.gitignore')
fs.rmSync('./generated/.npmignore')
fs.rmSync('./generated/git_push.sh')
fs.rmSync('./generated/.openapi-generator/FILES')
