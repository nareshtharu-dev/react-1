const Label = ({ htmlFor, title }) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        {title}
      </label>
    </>
  );
};

export default Label;
