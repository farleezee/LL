
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
const gltfShape = new GLTFShape("e547c30b71dc689765010797a627ed2a95c9016cd4722fd272d335e0213faab9/FloorBaseConcrete_01/FloorBaseConcrete_01.glb")
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

const nft = new Entity('nft')
engine.addEntity(nft)
nft.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(0.06403005868196487, 2, 8),
  rotation: new Quaternion(8.817940676788736e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(7.7014055252075195, 5, 0.626532793045044)
})
nft.addComponentOrReplace(transform3)
const nftShape = new NFTShape("ethereum://0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/26889")
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true
nftShape.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft.addComponentOrReplace(nftShape)

const doorframeRed = new Entity('doorframeRed')
engine.addEntity(doorframeRed)
doorframeRed.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(2.0494089126586914, 0, 15.937725067138672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
doorframeRed.addComponentOrReplace(transform4)
const gltfShape2 = new GLTFShape("ff02fcf87ce8e04bfa88c361c5bc83d539c3b998a72da2c1eaff5510d833f614/RedDoorframe.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
doorframeRed.addComponentOrReplace(gltfShape2)

const doorframeRed2 = new Entity('doorframeRed2')
engine.addEntity(doorframeRed2)
doorframeRed2.setParent(_scene)
doorframeRed2.addComponentOrReplace(gltfShape2)
const transform5 = new Transform({
  position: new Vector3(16, 0, 0.3424209654331207),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
doorframeRed2.addComponentOrReplace(transform5)

const windowRedLarge = new Entity('windowRedLarge')
engine.addEntity(windowRedLarge)
windowRedLarge.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(16, 0, 12),
  rotation: new Quaternion(1.539415254273621e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(3.836331367492676, 1, 0.009999881498515606)
})
windowRedLarge.addComponentOrReplace(transform6)
const gltfShape3 = new GLTFShape("84d6e66c9ff5fb50f912f34e830b30094c063adc66e514a88cf5512f956ef612/RedWindowLarge.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
windowRedLarge.addComponentOrReplace(gltfShape3)

const concreteWall = new Entity('concreteWall')
engine.addEntity(concreteWall)
concreteWall.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(15.921998023986816, 0, 4.423645973205566),
  rotation: new Quaternion(4.483351213168524e-16, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(2.0735716819763184, 1, 0.009999935515224934)
})
concreteWall.addComponentOrReplace(transform7)
const gltfShape4 = new GLTFShape("faeff6a0a9602216afdf01dd208293747c1c4534dca9a2c9918c5b7a316829ad/Concrete_Wall.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
concreteWall.addComponentOrReplace(gltfShape4)

const concreteWall2 = new Entity('concreteWall2')
engine.addEntity(concreteWall2)
concreteWall2.setParent(_scene)
concreteWall2.addComponentOrReplace(gltfShape4)
const transform8 = new Transform({
  position: new Vector3(15.940211296081543, 0, 15.959547996520996),
  rotation: new Quaternion(4.483351213168524e-16, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1.9938292503356934, 1, 0.009999935515224934)
})
concreteWall2.addComponentOrReplace(transform8)

const concreteWall3 = new Entity('concreteWall3')
engine.addEntity(concreteWall3)
concreteWall3.setParent(_scene)
concreteWall3.addComponentOrReplace(gltfShape4)
const transform9 = new Transform({
  position: new Vector3(13.381250381469727, 0, 15.97011947631836),
  rotation: new Quaternion(-2.9337197886389506e-15, 1, -1.1920928244535389e-7, 5.960464477539063e-8),
  scale: new Vector3(1.2969084978103638, 1, 0.009999933652579784)
})
concreteWall3.addComponentOrReplace(transform9)

const windowRedLarge2 = new Entity('windowRedLarge2')
engine.addEntity(windowRedLarge2)
windowRedLarge2.setParent(_scene)
windowRedLarge2.addComponentOrReplace(gltfShape3)
const transform10 = new Transform({
  position: new Vector3(6.756324291229248, 0, 15.971063613891602),
  rotation: new Quaternion(2.464260247952727e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(3.3323893547058105, 1, 0.00999988242983818)
})
windowRedLarge2.addComponentOrReplace(transform10)

const concreteWall4 = new Entity('concreteWall4')
engine.addEntity(concreteWall4)
concreteWall4.setParent(_scene)
concreteWall4.addComponentOrReplace(gltfShape4)
const transform11 = new Transform({
  position: new Vector3(6.8498687744140625, 0, 15.983837127685547),
  rotation: new Quaternion(-5.247743496803077e-15, -5.960464477539063e-8, 0, 1),
  scale: new Vector3(2.4632866382598877, 1, 0.009999936446547508)
})
concreteWall4.addComponentOrReplace(transform11)

const concreteWall5 = new Entity('concreteWall5')
engine.addEntity(concreteWall5)
concreteWall5.setParent(_scene)
concreteWall5.addComponentOrReplace(gltfShape4)
const transform12 = new Transform({
  position: new Vector3(14.006625175476074, 0, 0.10168077796697617),
  rotation: new Quaternion(-4.293549023259846e-15, -5.960464477539063e-8, 1.0578560596941067e-15, 1),
  scale: new Vector3(1.6403287649154663, 1, 0.009999936446547508)
})
concreteWall5.addComponentOrReplace(transform12)

const windowRedLarge3 = new Entity('windowRedLarge3')
engine.addEntity(windowRedLarge3)
windowRedLarge3.setParent(_scene)
windowRedLarge3.addComponentOrReplace(gltfShape3)
const transform13 = new Transform({
  position: new Vector3(10.840898513793945, 0, 0.17222751677036285),
  rotation: new Quaternion(2.1770622922413687e-15, -5.960464477539063e-8, 2.4641827444380534e-15, -1),
  scale: new Vector3(2.6349358558654785, 1, 0.00999988242983818)
})
windowRedLarge3.addComponentOrReplace(transform13)

const doorframeRed3 = new Entity('doorframeRed3')
engine.addEntity(doorframeRed3)
doorframeRed3.setParent(_scene)
doorframeRed3.addComponentOrReplace(gltfShape2)
const transform14 = new Transform({
  position: new Vector3(2.0102710723876953, 0, 0.3301240801811218),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
doorframeRed3.addComponentOrReplace(transform14)

const concreteWall6 = new Entity('concreteWall6')
engine.addEntity(concreteWall6)
concreteWall6.setParent(_scene)
concreteWall6.addComponentOrReplace(gltfShape4)
const transform15 = new Transform({
  position: new Vector3(5.646963596343994, 0, 0.11536042392253876),
  rotation: new Quaternion(-4.293549023259846e-15, -5.960464477539063e-8, 1.0578560596941067e-15, 1),
  scale: new Vector3(1.849988579750061, 1, 0.009999936446547508)
})
concreteWall6.addComponentOrReplace(transform15)

const concreteWall7 = new Entity('concreteWall7')
engine.addEntity(concreteWall7)
concreteWall7.setParent(_scene)
concreteWall7.addComponentOrReplace(gltfShape4)
const transform16 = new Transform({
  position: new Vector3(0.011725745163857937, 0, 0.22368335723876953),
  rotation: new Quaternion(-8.883357137184304e-15, 0.7071067690849304, -8.429368847373553e-8, 0.70710688829422),
  scale: new Vector3(7.751084327697754, 1, 0.009999936446547508)
})
concreteWall7.addComponentOrReplace(transform16)

const nft3 = new Entity('nft3')
engine.addEntity(nft3)
nft3.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(4.41091251373291, 2.573636531829834, 16),
  rotation: new Quaternion(-1.276273076615932e-14, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(6.9036946296691895, 4.673500061035156, 0.14644508063793182)
})
nft3.addComponentOrReplace(transform17)
const nftShape2 = new NFTShape("ethereum://0x2a187453064356c898cae034eaed119e1663acb8/16126648860995317394878828010027357856923050845760655456955720934373373059274")
nftShape2.withCollisions = true
nftShape2.isPointerBlocker = true
nftShape2.visible = true
nftShape2.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft3.addComponentOrReplace(nftShape2)

const nft4 = new Entity('nft4')
engine.addEntity(nft4)
nft4.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(3.7697958946228027, 2.2099409103393555, 0.15614891052246094),
  rotation: new Quaternion(-7.872085348490342e-15, 1, -1.1920928955078125e-7, 4.470348358154297e-8),
  scale: new Vector3(3.340019702911377, 3.3159892559051514, 1.0000008344650269)
})
nft4.addComponentOrReplace(transform18)
const nftShape3 = new NFTShape("ethereum://0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/18165")
nftShape3.withCollisions = true
nftShape3.isPointerBlocker = true
nftShape3.visible = true
nftShape3.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft4.addComponentOrReplace(nftShape3)

const nft5 = new Entity('nft5')
engine.addEntity(nft5)
nft5.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(12.436782836914062, 2.1711227893829346, 0.18123385310173035),
  rotation: new Quaternion(-4.9758925075465456e-15, -1, 1.1920923981278975e-7, -2.0116567611694336e-7),
  scale: new Vector3(3.8614468574523926, 3.4006271362304688, 1)
})
nft5.addComponentOrReplace(transform19)
const nftShape4 = new NFTShape("ethereum://0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/27469")
nftShape4.withCollisions = true
nftShape4.isPointerBlocker = true
nftShape4.visible = true
nftShape4.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft5.addComponentOrReplace(nftShape4)

const roofGreyEdgesSmall = new Entity('roofGreyEdgesSmall')
engine.addEntity(roofGreyEdgesSmall)
roofGreyEdgesSmall.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 1, 8.000003814697266)
})
roofGreyEdgesSmall.addComponentOrReplace(transform20)
const gltfShape5 = new GLTFShape("2de22a6b3d2d1a3e65d2bdb8967f122f02bfd97d7aa67216a2c89f5eacf39599/GreyRoof_4Edges_Small.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
roofGreyEdgesSmall.addComponentOrReplace(gltfShape5)

const nft2 = new Entity('nft2')
engine.addEntity(nft2)
nft2.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(4.426339626312256, 2.1105079650878906, 15.940812110900879),
  rotation: new Quaternion(-1.2920801513677076e-15, 2.2351741790771484e-8, -2.856009597926052e-15, -1),
  scale: new Vector3(4.5000152587890625, 4, 1.000003695487976)
})
nft2.addComponentOrReplace(transform21)
const nftShape5 = new NFTShape("ethereum://0x60f80121c31a0d46b5279700f9df786054aa5ee5/385559")
nftShape5.withCollisions = true
nftShape5.isPointerBlocker = true
nftShape5.visible = true
nftShape5.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft2.addComponentOrReplace(nftShape5)

const nft6 = new Entity('nft6')
engine.addEntity(nft6)
nft6.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(14.671435356140137, 2.1769332885742188, 15.941231727600098),
  rotation: new Quaternion(1.0337657650478366e-14, 6.705522537231445e-8, 7.45057526785331e-9, -1),
  scale: new Vector3(2.2900469303131104, 2.187483787536621, 0.9999999403953552)
})
nft6.addComponentOrReplace(transform22)
const nftShape6 = new NFTShape("ethereum://0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/28654")
nftShape6.withCollisions = true
nftShape6.isPointerBlocker = true
nftShape6.visible = true
nftShape6.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft6.addComponentOrReplace(nftShape6)
