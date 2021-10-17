
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const checkeredRug = new Entity('checkeredRug')
engine.addEntity(checkeredRug)
checkeredRug.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(8, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.5, 1, 7.499998092651367)
})
checkeredRug.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("8ccdbe7a-cddf-4920-bc11-245ebeb90200/Carpet_02/Carpet_02.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
checkeredRug.addComponentOrReplace(gltfShape2)

const roundedStarlightRug = new Entity('roundedStarlightRug')
engine.addEntity(roundedStarlightRug)
roundedStarlightRug.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(7.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roundedStarlightRug.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("0b906173-5b55-4c95-9a53-9d9c6ba21fe0/Carpet_02/Carpet_02.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
roundedStarlightRug.addComponentOrReplace(gltfShape3)

const constellationRug = new Entity('constellationRug')
engine.addEntity(constellationRug)
constellationRug.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
constellationRug.addComponentOrReplace(transform5)
const gltfShape4 = new GLTFShape("d46670bf-a528-4680-84a6-39ca83a3caca/Carpet_01/Carpet_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
constellationRug.addComponentOrReplace(gltfShape4)

const windowZigzag = new Entity('windowZigzag')
engine.addEntity(windowZigzag)
windowZigzag.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(15.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.426772117614746, 1.5, 1.000000238418579)
})
windowZigzag.addComponentOrReplace(transform6)
const gltfShape5 = new GLTFShape("141ed339-876d-44c8-a7fa-c0adfe474f9c/ZigzagWindow.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
windowZigzag.addComponentOrReplace(gltfShape5)

const wallZigzag2 = new Entity('wallZigzag2')
engine.addEntity(wallZigzag2)
wallZigzag2.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(0.90219646692276, 0, 2.074023723602295),
  rotation: new Quaternion(-1.0385339676178152e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(6.553293228149414, 1.5, 1.0000040531158447)
})
wallZigzag2.addComponentOrReplace(transform7)
const gltfShape6 = new GLTFShape("932f0435-9974-4451-b63a-6967c7faf606/ZigzagWall.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
wallZigzag2.addComponentOrReplace(gltfShape6)

const roofBlueEdgesSmall = new Entity('roofBlueEdgesSmall')
engine.addEntity(roofBlueEdgesSmall)
roofBlueEdgesSmall.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(15.5, 2, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.499999523162842, 1, 7.629828929901123)
})
roofBlueEdgesSmall.addComponentOrReplace(transform8)
const gltfShape7 = new GLTFShape("5842de4c-fc8b-47f4-9e00-74314b6989cc/BlueRoof_4Edges_Small.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
roofBlueEdgesSmall.addComponentOrReplace(gltfShape7)

const wallZigzag = new Entity('wallZigzag')
engine.addEntity(wallZigzag)
wallZigzag.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(15.109492301940918, 0, 15.282529830932617),
  rotation: new Quaternion(4.440892627896218e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(6.7108988761901855, 1.5, 1.0000061988830566)
})
wallZigzag.addComponentOrReplace(transform9)
wallZigzag.addComponentOrReplace(gltfShape6)

const wallPinkBoards = new Entity('wallPinkBoards')
engine.addEntity(wallPinkBoards)
wallPinkBoards.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(15.275983810424805, 0, 0.3779515027999878),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.098593711853027, 1.5, 1.0000007152557373)
})
wallPinkBoards.addComponentOrReplace(transform10)
const gltfShape8 = new GLTFShape("f6fb3031-dc9e-4a10-92a5-ffaac7339e50/PinkBoardsWall.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
wallPinkBoards.addComponentOrReplace(gltfShape8)

const nft = new Entity('nft')
engine.addEntity(nft)
nft.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(12.870010375976562, 3.5, 0.45999693870544434),
  rotation: new Quaternion(-5.7769201308201495e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(5, 5, 1.0000003576278687)
})
nft.addComponentOrReplace(transform11)
const nftShape = new NFTShape("ethereum://0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/27469")
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true
nftShape.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft.addComponentOrReplace(nftShape)

const nft2 = new Entity('nft2')
engine.addEntity(nft2)
nft2.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(3.6336145401000977, 3.261016845703125, 0.4509623050689697),
  rotation: new Quaternion(4.525673743773677e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(5, 4.5, 1.000000238418579)
})
nft2.addComponentOrReplace(transform12)
const nftShape2 = new NFTShape("ethereum://0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/18165")
nftShape2.withCollisions = true
nftShape2.isPointerBlocker = true
nftShape2.visible = true
nftShape2.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft2.addComponentOrReplace(nftShape2)

const nft3 = new Entity('nft3')
engine.addEntity(nft3)
nft3.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(15.079306602478027, 3.5101232528686523, 8.031803131103516),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(9.750027656555176, 6, 1.0000028610229492)
})
nft3.addComponentOrReplace(transform13)
const nftShape3 = new NFTShape("ethereum://0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/26889")
nftShape3.withCollisions = true
nftShape3.isPointerBlocker = true
nftShape3.visible = true
nftShape3.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft3.addComponentOrReplace(nftShape3)

const nft4 = new Entity('nft4')
engine.addEntity(nft4)
nft4.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(0.5, 3.531649351119995, 3.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5, 4, 1.0000028610229492)
})
nft4.addComponentOrReplace(transform14)
const nftShape4 = new NFTShape("ethereum://0x2a187453064356c898cae034eaed119e1663acb8/16126648860995317394878828010027357856923050845760655456955720934373373059274")
nftShape4.withCollisions = true
nftShape4.isPointerBlocker = true
nftShape4.visible = true
nftShape4.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft4.addComponentOrReplace(nftShape4)
