import React, { useState } from 'react';

export default function FormValidation() {
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = () => {
    if (regex.test(pass)) {
      setErr("✅ Password is Strong");
    } else {
      setErr("❌ Password is Weak");
    }
  };

  return (
    <div>
      <h1>Form Validation</h1>
      <input type="password" placeholder="Enter Your Password" value={pass} onChange={(e) => setPass(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

