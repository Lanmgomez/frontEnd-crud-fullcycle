type PROP = {
  error: string | undefined,
  touched: boolean | undefined  
};

const ErrorMessage = ({ error, touched }: PROP) => {
  return (
    <div style={{ color: "red", marginTop: "-25px", fontWeight: "bold" }}>
        {error && touched && <div>{error}</div>}
    </div>
  );
};

export default ErrorMessage;