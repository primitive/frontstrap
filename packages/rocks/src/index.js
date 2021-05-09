const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/rocks/src/index.js</pre>
    </>
  );
};

export default {
  name: "rocks",
  roots: {
    frontstrap: Root
  },
  state: {
    frontstrap: {}
  },
  actions: {
    frontstrap: {}
  }
};
