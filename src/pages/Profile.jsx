function Profile() {
  return (
    <>
      <div>
        <h2>Profile Page</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" />
           <br />
          <label>Email:</label>
          <input type="text" name="email" />
        </form>
      </div>
    </>
  );
}

export default Profile;