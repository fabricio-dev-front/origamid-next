"use client";

export function Login() {
  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;

    const response = await fetch("/api2/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) window.location.href = "/";
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="username">Username</label>
        <input
          className="bg-white/5"
          type="text"
          id="username"
          name="username"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="password">Password</label>
        <input
          className="bg-white/5"
          type="password"
          id="password"
          name="password"
        />
      </div>

      <button
        className="mt-5 bg-green-400 px-10 py-4 rounded-2xl cursor-pointer font-bold text-base"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
