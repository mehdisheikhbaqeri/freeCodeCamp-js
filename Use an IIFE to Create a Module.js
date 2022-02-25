let funModule = (() => {
  return {
    isCuteMixin: (obj) => {
      obj.isCute = () => {
        true;
      };
    },
    singMixin: (obj) => {
      obj.sing = () => {
        console.log("okey bye");
      };
    },
  };
})();
