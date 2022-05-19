import {
  BellIcon,
  ClipboardListIcon,
  ScaleIcon,
  SpeakerphoneIcon,
  XIcon,
} from "@heroicons/react/outline";

export default function Home() {
  return (
    <>
      <div className="bg-cyan-600">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-cyan-800">
                <SpeakerphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                Sign up to know when we launch!
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="https://airtable.com/shr1SWVIGZt30Ig0y"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-cyan-600 bg-white hover:bg-cyan-50"
              >
                Sign up here
              </a>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <header className="py-4 max-w-xs mx-auto">
        <div className="text-cyan-600 font-bold text-lg">Polipal</div>
      </header>
      <main className="flex flex-col gap-16 max-w-xs mx-auto pt-16 text-center">
        <section>
          <h1 className="text-4xl font-medium leading-snug">
            How well does your representative speak for you?
          </h1>
          <div className="mt-6 mx-auto">
            <p className="font-medium">Find your representative</p>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow-sm w-full mt-2 focus:ring-cyan-500 focus:border-cyan-500 block sm:text-sm border-gray-300 rounded-md"
              placeholder="3350 or Scott Morrison"
            />
            <p className="text-right text-xs text-slate-400 mt-2">
              Powered by TheyVoteForYou
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-12">
          <div>
            <h2 className="text-3xl font-medium">
              Cut through the <br />{" "}
              <span className="line-through">bullshit</span>
            </h2>
            <p className="mt-6">
              Politics should be a contest of ideas, not an audition for the X
              Factor. Our media landscape has failed us in keeping our
              representatives accountable; it&apos;s up to us.
            </p>
          </div>
          <div className="grid space-y-6">
            <h3 className="font-bold text-2xl">Get answers now</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="bg-cyan-700 rounded h-12 w-12 text-white flex items-center justify-center">
                  <ClipboardListIcon className="h-7 w-7" />
                </div>
                <p>Take the quiz</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-cyan-700 rounded h-12 w-12 text-white flex items-center justify-center">
                  <ScaleIcon className="h-7 w-7" />
                </div>
                <p>See your results</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-cyan-700 rounded h-12 w-12 text-white flex items-center justify-center">
                  <BellIcon className="h-7 w-7" />
                </div>
                <p>Stay in the loop</p>
              </li>
            </ul>
          </div>
          <div className="text-left grid space-y-4">
            <h3 className="font-bold text-2xl">Get the facts</h3>
            <p>
              We are so separated from our politicians; it&apos;s even taboo to
              talk about it these days. How can we ever think that we will be
              truly represented, if we can&apos;t even discuss it?
            </p>
            <p>
              Polipal is a platform to help you discover your options, find who
              represents you the best based on people&apos;s voting record and
              policies.
            </p>
            <p>
              We want a better represented Australia, and the first step to that
              is understanding what&apos;s going on.
            </p>
          </div>
          <div className="text-left grid space-y-4">
            <h3 className="font-bold text-2xl">Normalise it</h3>
            <p>
              We give it to you straight. Our platform is powererd by the
              Hansard record. We give you the tools to verify this.
            </p>
            <p>
              We&apos;re not here to persuade you - we&apos;re here to help you
              know exactly who are voting for.
            </p>
          </div>
          <div className="text-left grid space-y-4">
            <h3 className="font-bold text-2xl">Stay connected</h3>
            <p>
              When your representative votes on something that matters to you,
              we&apos;ll let you know.
            </p>
            <p>
              In this world of connectivity, it should be quick and easy to stay
              connected to the person who votes for you. We&apos;re empowering
              you to do just that.
            </p>
          </div>
        </section>
        <section className="grid space-y-6 text-left">
          <h2 className="text-3xl font-medium text-center">
            <span className="italic">&quot;We don&apos;t need this&quot;</span>
            <br />
            <span className="underline">Wrong.</span>
          </h2>
          <p className="text-center">
            We&apos;re on the fast track to becoming the most corrupt and least
            trusting country there is. This should be raising red flags
            everywhere! 🚩
          </p>
          <img src="/chart.png" alt="Chart" className="w-full h-auto" />
          <p>
            We&apos;ve hit a “record low” - and that&apos;s just not acceptable.
          </p>
          <p>
            Transparency International (TI)&apos;s latest Corruption Perceptions
            Index (CPI) report has put Australia in 18th place, scoring just 73
            points on the 100-point scale.
          </p>
          <p>
            This is the worst result Australia has ever received since
            Transparency International&apos;s new methodology began in 2012. Our
            rank in the global index has fallen 11 places.
          </p>
          <p>It&apos;s up to us to make a change.</p>
        </section>
        <div>
          <div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-4">
                Sign in with
              </p>

              <div className="mt-1 grid grid-cols-3 gap-3">
                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Twitter</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with GitHub</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:text-cyan-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <footer className="max-w-xs mx-auto mt-16">
        <p>© 2022 Polivax, Inc. All rights reserved. </p>
        <p className="text-xs">Data powered by They Vote For You.</p>
      </footer>
    </>
  );
}
