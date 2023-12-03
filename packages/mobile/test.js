



import * as Client from '@web3-storage/w3up-client'
import * as Signer from '@ucanto/principal/ed25519'
import { CarReader } from '@ipld/car'
import * as DID from '@ipld/dag-ucan/did'
import * as Delegation from '@ucanto/core/delegation'
import { importDAG } from '@ucanto/core/delegation'
import { create } from '@web3-storage/w3up-client'

// import * as Signer from '@ucanto/principal/ed25519'
// import * as Client from '@web3-storage/w3up-client'


async function main () {

    const API_KEY = "MgCZjVlRh+pnDLq/69/u7DtbJBq+BHefvQ+3DNFOHxOruMu0BHXRNDVnPIOX9YgjoMmcpPj6K5dIX5z32ObSEIdffPg4="
    const PROOF = `EaJlcm9vdHOAZ3ZlcnNpb24BwQUBcRIgsde+8mN1Sz5McH2tUYjS34S/p354gkqDja/fme47/z2o
    YXNYRO2hA0BnfQNqygc1otMRO9Dwll/GpmhJPx4P8ba+X6bQCZ+Cah4IW6R6+8hwstesZN7iHVG0
    OZJTdFPKT7q2+yiwnEUOYXZlMC45LjFjYXR0hqJjY2FuZ3NwYWNlLypkd2l0aHg4ZGlkOmtleTp6
    Nk1rc3J4WFVIS3M2ZUJleEZaaWtmUHJVdFNmOHBMaEZpVFhLUW9kbURqMUVxYkWiY2NhbmdzdG9y
    ZS8qZHdpdGh4OGRpZDprZXk6ejZNa3NyeFhVSEtzNmVCZXhGWmlrZlByVXRTZjhwTGhGaVRYS1Fv
    ZG1EajFFcWJFomNjYW5odXBsb2FkLypkd2l0aHg4ZGlkOmtleTp6Nk1rc3J4WFVIS3M2ZUJleEZa
    aWtmUHJVdFNmOHBMaEZpVFhLUW9kbURqMUVxYkWiY2NhbmhhY2Nlc3MvKmR3aXRoeDhkaWQ6a2V5
    Ono2TWtzcnhYVUhLczZlQmV4Rlppa2ZQclV0U2Y4cExoRmlUWEtRb2RtRGoxRXFiRaJjY2FuamZp
    bGVjb2luLypkd2l0aHg4ZGlkOmtleTp6Nk1rc3J4WFVIS3M2ZUJleEZaaWtmUHJVdFNmOHBMaEZp
    VFhLUW9kbURqMUVxYkWiY2Nhbmd1c2FnZS8qZHdpdGh4OGRpZDprZXk6ejZNa3NyeFhVSEtzNmVC
    ZXhGWmlrZlByVXRTZjhwTGhGaVRYS1FvZG1EajFFcWJFY2F1ZFgi7QF76zDHKrfmQp6Z9YHMcWRt
    D44Omx9U9P61eALhpzNl+mNleHAaZ01UwmNmY3SBoWVzcGFjZaFkbmFtZWlEb2N1bWVudHNjaXNz
    WCLtAcc6D3CU6ZfgetrMAR79TiCXAOmj5eXCPE2QioFlG5PJY3ByZoDBBQFxEiCx177yY3VLPkxw
    fa1RiNLfhL+nfniCSoONr9+Z7jv/Pahhc1hE7aEDQGd9A2rKBzWi0xE70PCWX8amaEk/Hg/xtr5f
    ptAJn4JqHghbpHr7yHCy16xk3uIdUbQ5klN0U8pPurb7KLCcRQ5hdmUwLjkuMWNhdHSGomNjYW5n
    c3BhY2UvKmR3aXRoeDhkaWQ6a2V5Ono2TWtzcnhYVUhLczZlQmV4Rlppa2ZQclV0U2Y4cExoRmlU
    WEtRb2RtRGoxRXFiRaJjY2FuZ3N0b3JlLypkd2l0aHg4ZGlkOmtleTp6Nk1rc3J4WFVIS3M2ZUJl
    eEZaaWtmUHJVdFNmOHBMaEZpVFhLUW9kbURqMUVxYkWiY2Nhbmh1cGxvYWQvKmR3aXRoeDhkaWQ6
    a2V5Ono2TWtzcnhYVUhLczZlQmV4Rlppa2ZQclV0U2Y4cExoRmlUWEtRb2RtRGoxRXFiRaJjY2Fu
    aGFjY2Vzcy8qZHdpdGh4OGRpZDprZXk6ejZNa3NyeFhVSEtzNmVCZXhGWmlrZlByVXRTZjhwTGhG
    aVRYS1FvZG1EajFFcWJFomNjYW5qZmlsZWNvaW4vKmR3aXRoeDhkaWQ6a2V5Ono2TWtzcnhYVUhL
    czZlQmV4Rlppa2ZQclV0U2Y4cExoRmlUWEtRb2RtRGoxRXFiRaJjY2FuZ3VzYWdlLypkd2l0aHg4
    ZGlkOmtleTp6Nk1rc3J4WFVIS3M2ZUJleEZaaWtmUHJVdFNmOHBMaEZpVFhLUW9kbURqMUVxYkVj
    YXVkWCLtAXvrMMcqt+ZCnpn1gcxxZG0Pjg6bH1T0/rV4AuGnM2X6Y2V4cBpnTVTCY2ZjdIGhZXNw
    YWNloWRuYW1laURvY3VtZW50c2Npc3NYIu0BxzoPcJTpl+B62swBHv1OIJcA6aPl5cI8TZCKgWUb
    k8ljcHJmgMEFAXESILHXvvJjdUs+THB9rVGI0t+Ev6d+eIJKg42v35nuO/89qGFzWETtoQNAZ30D
    asoHNaLTETvQ8JZfxqZoST8eD/G2vl+m0AmfgmoeCFukevvIcLLXrGTe4h1RtDmSU3RTyk+6tvso
    sJxFDmF2ZTAuOS4xY2F0dIaiY2NhbmdzcGFjZS8qZHdpdGh4OGRpZDprZXk6ejZNa3NyeFhVSEtz
    NmVCZXhGWmlrZlByVXRTZjhwTGhGaVRYS1FvZG1EajFFcWJFomNjYW5nc3RvcmUvKmR3aXRoeDhk
    aWQ6a2V5Ono2TWtzcnhYVUhLczZlQmV4Rlppa2ZQclV0U2Y4cExoRmlUWEtRb2RtRGoxRXFiRaJj
    Y2FuaHVwbG9hZC8qZHdpdGh4OGRpZDprZXk6ejZNa3NyeFhVSEtzNmVCZXhGWmlrZlByVXRTZjhw
    TGhGaVRYS1FvZG1EajFFcWJFomNjYW5oYWNjZXNzLypkd2l0aHg4ZGlkOmtleTp6Nk1rc3J4WFVI
    S3M2ZUJleEZaaWtmUHJVdFNmOHBMaEZpVFhLUW9kbURqMUVxYkWiY2NhbmpmaWxlY29pbi8qZHdp
    dGh4OGRpZDprZXk6ejZNa3NyeFhVSEtzNmVCZXhGWmlrZlByVXRTZjhwTGhGaVRYS1FvZG1EajFF
    cWJFomNjYW5ndXNhZ2UvKmR3aXRoeDhkaWQ6a2V5Ono2TWtzcnhYVUhLczZlQmV4Rlppa2ZQclV0
    U2Y4cExoRmlUWEtRb2RtRGoxRXFiRWNhdWRYIu0Be+swxyq35kKemfWBzHFkbQ+ODpsfVPT+tXgC
    4aczZfpjZXhwGmdNVMJjZmN0gaFlc3BhY2WhZG5hbWVpRG9jdW1lbnRzY2lzc1gi7QHHOg9wlOmX
    4HrazAEe/U4glwDpo+XlwjxNkIqBZRuTyWNwcmaAwQUBcRIgsde+8mN1Sz5McH2tUYjS34S/p354
    gkqDja/fme47/z2oYXNYRO2hA0BnfQNqygc1otMRO9Dwll/GpmhJPx4P8ba+X6bQCZ+Cah4IW6R6
    +8hwstesZN7iHVG0OZJTdFPKT7q2+yiwnEUOYXZlMC45LjFjYXR0hqJjY2FuZ3NwYWNlLypkd2l0
    aHg4ZGlkOmtleTp6Nk1rc3J4WFVIS3M2ZUJleEZaaWtmUHJVdFNmOHBMaEZpVFhLUW9kbURqMUVx
    YkWiY2NhbmdzdG9yZS8qZHdpdGh4OGRpZDprZXk6ejZNa3NyeFhVSEtzNmVCZXhGWmlrZlByVXRT
    ZjhwTGhGaVRYS1FvZG1EajFFcWJFomNjYW5odXBsb2FkLypkd2l0aHg4ZGlkOmtleTp6Nk1rc3J4
    WFVIS3M2ZUJleEZaaWtmUHJVdFNmOHBMaEZpVFhLUW9kbURqMUVxYkWiY2NhbmhhY2Nlc3MvKmR3
    aXRoeDhkaWQ6a2V5Ono2TWtzcnhYVUhLczZlQmV4Rlppa2ZQclV0U2Y4cExoRmlUWEtRb2RtRGox
    RXFiRaJjY2FuamZpbGVjb2luLypkd2l0aHg4ZGlkOmtleTp6Nk1rc3J4WFVIS3M2ZUJleEZaaWtm
    UHJVdFNmOHBMaEZpVFhLUW9kbURqMUVxYkWiY2Nhbmd1c2FnZS8qZHdpdGh4OGRpZDprZXk6ejZN
    a3NyeFhVSEtzNmVCZXhGWmlrZlByVXRTZjhwTGhGaVRYS1FvZG1EajFFcWJFY2F1ZFgi7QF76zDH
    KrfmQp6Z9YHMcWRtD44Omx9U9P61eALhpzNl+mNleHAaZ01UwmNmY3SBoWVzcGFjZaFkbmFtZWlE
    b2N1bWVudHNjaXNzWCLtAcc6D3CU6ZfgetrMAR79TiCXAOmj5eXCPE2QioFlG5PJY3ByZoDBBQFx
    EiCx177yY3VLPkxwfa1RiNLfhL+nfniCSoONr9+Z7jv/Pahhc1hE7aEDQGd9A2rKBzWi0xE70PCW
    X8amaEk/Hg/xtr5fptAJn4JqHghbpHr7yHCy16xk3uIdUbQ5klN0U8pPurb7KLCcRQ5hdmUwLjku
    MWNhdHSGomNjYW5nc3BhY2UvKmR3aXRoeDhkaWQ6a2V5Ono2TWtzcnhYVUhLczZlQmV4Rlppa2ZQ
    clV0U2Y4cExoRmlUWEtRb2RtRGoxRXFiRaJjY2FuZ3N0b3JlLypkd2l0aHg4ZGlkOmtleTp6Nk1r
    c3J4WFVIS3M2ZUJleEZaaWtmUHJVdFNmOHBMaEZpVFhLUW9kbURqMUVxYkWiY2Nhbmh1cGxvYWQv
    KmR3aXRoeDhkaWQ6a2V5Ono2TWtzcnhYVUhLczZlQmV4Rlppa2ZQclV0U2Y4cExoRmlUWEtRb2Rt
    RGoxRXFiRaJjY2FuaGFjY2Vzcy8qZHdpdGh4OGRpZDprZXk6ejZNa3NyeFhVSEtzNmVCZXhGWmlr
    ZlByVXRTZjhwTGhGaVRYS1FvZG1EajFFcWJFomNjYW5qZmlsZWNvaW4vKmR3aXRoeDhkaWQ6a2V5
    Ono2TWtzcnhYVUhLczZlQmV4Rlppa2ZQclV0U2Y4cExoRmlUWEtRb2RtRGoxRXFiRaJjY2FuZ3Vz
    YWdlLypkd2l0aHg4ZGlkOmtleTp6Nk1rc3J4WFVIS3M2ZUJleEZaaWtmUHJVdFNmOHBMaEZpVFhL
    UW9kbURqMUVxYkVjYXVkWCLtAXvrMMcqt+ZCnpn1gcxxZG0Pjg6bH1T0/rV4AuGnM2X6Y2V4cBpn
    TVTCY2ZjdIGhZXNwYWNloWRuYW1laURvY3VtZW50c2Npc3NYIu0BxzoPcJTpl+B62swBHv1OIJcA
    6aPl5cI8TZCKgWUbk8ljcHJmgMEFAXESILHXvvJjdUs+THB9rVGI0t+Ev6d+eIJKg42v35nuO/89
    qGFzWETtoQNAZ30DasoHNaLTETvQ8JZfxqZoST8eD/G2vl+m0AmfgmoeCFukevvIcLLXrGTe4h1R
    tDmSU3RTyk+6tvsosJxFDmF2ZTAuOS4xY2F0dIaiY2NhbmdzcGFjZS8qZHdpdGh4OGRpZDprZXk6
    ejZNa3NyeFhVSEtzNmVCZXhGWmlrZlByVXRTZjhwTGhGaVRYS1FvZG1EajFFcWJFomNjYW5nc3Rv
    cmUvKmR3aXRoeDhkaWQ6a2V5Ono2TWtzcnhYVUhLczZlQmV4Rlppa2ZQclV0U2Y4cExoRmlUWEtR
    b2RtRGoxRXFiRaJjY2FuaHVwbG9hZC8qZHdpdGh4OGRpZDprZXk6ejZNa3NyeFhVSEtzNmVCZXhG
    WmlrZlByVXRTZjhwTGhGaVRYS1FvZG1EajFFcWJFomNjYW5oYWNjZXNzLypkd2l0aHg4ZGlkOmtl
    eTp6Nk1rc3J4WFVIS3M2ZUJleEZaaWtmUHJVdFNmOHBMaEZpVFhLUW9kbURqMUVxYkWiY2Nhbmpm
    aWxlY29pbi8qZHdpdGh4OGRpZDprZXk6ejZNa3NyeFhVSEtzNmVCZXhGWmlrZlByVXRTZjhwTGhG
    aVRYS1FvZG1EajFFcWJFomNjYW5ndXNhZ2UvKmR3aXRoeDhkaWQ6a2V5Ono2TWtzcnhYVUhLczZl
    QmV4Rlppa2ZQclV0U2Y4cExoRmlUWEtRb2RtRGoxRXFiRWNhdWRYIu0Be+swxyq35kKemfWBzHFk
    bQ+ODpsfVPT+tXgC4aczZfpjZXhwGmdNVMJjZmN0gaFlc3BhY2WhZG5hbWVpRG9jdW1lbnRzY2lz
    c1gi7QHHOg9wlOmX4HrazAEe/U4glwDpo+XlwjxNkIqBZRuTyWNwcmaAswcBcRIgFfKvj9lYI3G7
    vdyA2rtpMJaZQdmjJRXK++d/AHKkOPyoYXNYRO2hA0CfhoV2hMJeKygjwl+UexG5BtDc9WMFgts4
    SiEIDIseLRVIrl8fdZTLoStSK5kFU6ScvDZl5uW2ouoSVfIvIF8GYXZlMC45LjFjYXR0hqJjY2Fu
    Z3NwYWNlLypkd2l0aHg4ZGlkOmtleTp6Nk1rc3J4WFVIS3M2ZUJleEZaaWtmUHJVdFNmOHBMaEZp
    VFhLUW9kbURqMUVxYkWiY2NhbmdzdG9yZS8qZHdpdGh4OGRpZDprZXk6ejZNa3NyeFhVSEtzNmVC
    ZXhGWmlrZlByVXRTZjhwTGhGaVRYS1FvZG1EajFFcWJFomNjYW5odXBsb2FkLypkd2l0aHg4ZGlk
    OmtleTp6Nk1rc3J4WFVIS3M2ZUJleEZaaWtmUHJVdFNmOHBMaEZpVFhLUW9kbURqMUVxYkWiY2Nh
    bmhhY2Nlc3MvKmR3aXRoeDhkaWQ6a2V5Ono2TWtzcnhYVUhLczZlQmV4Rlppa2ZQclV0U2Y4cExo
    RmlUWEtRb2RtRGoxRXFiRaJjY2FuamZpbGVjb2luLypkd2l0aHg4ZGlkOmtleTp6Nk1rc3J4WFVI
    S3M2ZUJleEZaaWtmUHJVdFNmOHBMaEZpVFhLUW9kbURqMUVxYkWiY2Nhbmd1c2FnZS8qZHdpdGh4
    OGRpZDprZXk6ejZNa3NyeFhVSEtzNmVCZXhGWmlrZlByVXRTZjhwTGhGaVRYS1FvZG1EajFFcWJF
    Y2F1ZFgi7QHOx/wc6k0GkXOb5bAUkhWJ25TFZlY5FV11swS11qQ+qmNleHD2Y2ZjdIGhZXNwYWNl
    oWRuYW1laURvY3VtZW50c2Npc3NYIu0Be+swxyq35kKemfWBzHFkbQ+ODpsfVPT+tXgC4aczZfpj
    cHJmhtgqWCUAAXESILHXvvJjdUs+THB9rVGI0t+Ev6d+eIJKg42v35nuO/892CpYJQABcRIgsde+
    8mN1Sz5McH2tUYjS34S/p354gkqDja/fme47/z3YKlglAAFxEiCx177yY3VLPkxwfa1RiNLfhL+n
    fniCSoONr9+Z7jv/PdgqWCUAAXESILHXvvJjdUs+THB9rVGI0t+Ev6d+eIJKg42v35nuO/892CpY
    JQABcRIgsde+8mN1Sz5McH2tUYjS34S/p354gkqDja/fme47/z3YKlglAAFxEiCx177yY3VLPkxw
    fa1RiNLfhL+nfniCSoONr9+Z7jv/PQ==
    `
    // console.log("API_KEY", API_KEY)

    // Load client with specific private key
    const principal = Signer.parse(API_KEY)
    const client = await Client.create({ principal })
    const proof = await parseProof(PROOF)
    const space = await client.addSpace(proof)
    await client.setCurrentSpace(space.did())
    // READY to go!
    // const files = [
    //   new File(['some-file-content'], 'readme.md'),
    //   new File(['import foo'], 'src/main.py'),
    //   // new File([someBinaryData], 'images/example.png'),
    // ]
    // const client2 = await create()
    const directoryCid = await client.uploadFile(new File(['some-file-content'], 'readme.md'))
    console.log(directoryCid)
  }

  /** @param {string} data Base64 encoded CAR file \*/
  async function parseProof (data) {
    const blocks = []
    console.log(blocks)
    const reader = await CarReader.fromBytes(Buffer.from(data, 'base64'))


    for await (const block of reader.blocks()) {
      blocks.push(block)
    }



    return importDAG(blocks)
  }

main()