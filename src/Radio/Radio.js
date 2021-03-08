export const Radio = () => {
  return (
    <>
      <p>Select a maintenance drone:</p>
      <div>
        <input type="radio" id="huey" name="drone" value="huey" />
        <label for="huey">Huey</label>
      </div>

      <div>
        <input type="radio" id="dewey" name="drone" value="dewey" />
        <label for="dewey">Dewey</label>
      </div>

      <div>
        <input type="radio" id="louie" name="drone" value="louie" />
        <label for="louie">Louie</label>
      </div>
    </>
  );
};
