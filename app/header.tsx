'use client';

import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';

export function Header() {
  const session = useSession();

  return (
    <header>
      <div>
        {session.data ? (
          <Button onClick={() => signOut()}>サインアウト</Button>
        ) : (
          <Button onClick={() => signIn('google')}>サインイン</Button>
        )}
        {session.data?.user?.name}
        <ModeToggle />
      </div>
    </header>
  );
}
/* TODO: 33:06:00からYouTune再生 */
