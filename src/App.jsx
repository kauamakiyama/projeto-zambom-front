import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function App() {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading, error } = useAuth0()

  if (isLoading) {
    return <p style={{ fontFamily: 'sans-serif' }}>Carregando…</p>
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 640, margin: '40px auto' }}>
      <h1>Auth0 Login Demo</h1>
      {error && <p style={{ color: 'red' }}>{error.message}</p>}

      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Entrar</button>
      ) : (
        <>
          <p>Bem-vindo{user?.given_name ? `, ${user.given_name}` : ''}!</p>
          <pre
            style={{
              background: '#f5f5f5',
              padding: 12,
              borderRadius: 8,
              overflowX: 'auto',
            }}
          >{JSON.stringify(user, null, 2)}</pre>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Sair
          </button>
        </>
      )}
    </div>
  )
}


