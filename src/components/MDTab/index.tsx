/**
 * MDTab component.
 */
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import RenderHtml from 'react-native-render-html';
import Container from '../Container';
import { createUseStyles } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface MDTabProps {
  fileName: string;
}

const MDTab: React.FC<MDTabProps> = ({ fileName }) => {
  const [contents, setContents] = useState<string>('');

  const classes = useStyles();

  useEffect(() => {
    const loadFile = async () => {
      const file = await import(`../../data/tabs/${fileName}.md`);
      const response = await fetch(file.default);
      const text = await response.text();
      setContents(text);
    };
    loadFile();
  }, [fileName]);

  return (
    <Container seo={{ title: fileName }}>
      <RenderHtml source={contents} />
      <ReactMarkdown className={classes.mdpage} source={contents} />
    </Container>
  );
};

export default MDTab;
