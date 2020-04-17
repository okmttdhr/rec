import * as React from 'react';

type Props = {
  q: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

export const QueryForm: React.FC<Props> = ({ q, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={q} onChange={onChange} />
    </form>
  );
};
