const { tmpdir } = require( 'os')
const { join } = require( 'path')
const { writeFileSync } = require( 'fs')
const { loadEnvs } = require( '../src/index')


describe('mutlienv', () => {
    let tempDir = ""
    let fileA = ""
    let fileB = ""

    beforeEach(() => {
        tempDir = tmpdir()

        fileA = join(tempDir, "fileA.env")
        fileB = join(tempDir, "fileB.env")

        writeFileSync(fileA, "EXAMPLE_A=apple\nEXAMPLE_B=bat")
        writeFileSync(fileB, "EXAMPLE_A=astronaut\nEXAMPLE_C=cat")
    })

    it('works with one env', () => {
        loadEnvs(fileA)

        expect(process.env["EXAMPLE_A"]).toEqual("apple")
        expect(process.env["EXAMPLE_B"]).toEqual("bat")
        expect(process.env["EXAMPLE_C"]).toBeUndefined()
    })

    it('works with multiple envs', () => {
        loadEnvs(fileA, fileB)

        expect(process.env["EXAMPLE_A"]).toEqual("apple")
        expect(process.env["EXAMPLE_B"]).toEqual("bat")
        expect(process.env["EXAMPLE_C"]).toEqual("cat")
    })
})
