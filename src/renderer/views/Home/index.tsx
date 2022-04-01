const Home = () => {
  const onFolderSelect = async () => {
    const filePath = await window.electronAPI.openFolder();
    console.log(filePath);
  };

  return (
    <div>
      <h1>Hello, Home!</h1>
      <button type="button" onClick={onFolderSelect}>
        Select folder
      </button>
    </div>
  );
};

export default Home;
