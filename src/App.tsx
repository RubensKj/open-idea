import React, { useState } from 'react';

// components
import ButtonIdea from './components/ButtonIdea';
import IntellijIcon from './assets/IntellijIcon';

// css
import './styles.css';
import './app.css';
import { openInIdea } from './core/git-idea-util';

function App() {
  const [repoUrl, setRepoUrl] = useState<string>('');

  const openIdea = (tool: string) => {
    if (!repoUrl) {
      return alert('Repo URL must be set.');
    }

    openInIdea(tool, repoUrl);
  }

  return (
    <div className="App">
      <input type="text" name="url" onChange={e => setRepoUrl(e.target.value)} placeholder="https://my-provider.com/my-organization/my-project" />
      <div className="buttons">
        <ButtonIdea onClick={() => openIdea('idea')} Image={IntellijIcon} />
      </div>
    </div>
  );
}

export default App;
