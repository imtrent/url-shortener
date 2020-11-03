import React from 'react';
import { Card } from './style';

interface Props {
  redirect: String;
  shortId: String;
}

export const Url: React.FC<Props> = ({ redirect, shortId }) => {
  return (
    <Card>
      <p>{redirect}</p>
      <a href={`${window.location.origin}/${shortId}`}>
        {window.location.origin}/{shortId}
      </a>
    </Card>
  );
};
