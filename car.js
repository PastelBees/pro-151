AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "./car.glb" }
  },
  init: function() {
    // Do something when component first attached.
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: 1, y: .3, z: 2 };
    const rotation = { x: 0, y: 160, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  }
});