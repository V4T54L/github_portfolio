import { useState } from "react"
import userData from "./data/mock_user_data"
import userRepo from "./data/mock_user_repo"
import { IoLogoGithub } from "react-icons/io5";


function App() {
  const [userInfo] = useState(userData)
  const [repos] = useState(userRepo)

  return (
    <>
      <header className="bg-white shadow">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Paul Miller</h2>
            <p className="text-gray-600">Full-Stack Developer</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-blue-600">About</a></li>
              <li><a href="#repos" className="hover:text-blue-600">Repositories</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="bg-gray-100 text-gray-800">
        <div className="container mx-auto p-8">
          <section id="about" className="text-center mb-16">
            <img src="https://avatars.githubusercontent.com/u/574696?v=4" alt="Paul Miller" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"></img>
            <h1 className="text-4xl font-bold flex justify-center items-center gap-4">Paul Miller
              <a
                target="_blank"
                rel="noreferrer"
                href={userInfo.html_url}><IoLogoGithub /></a></h1>
            {
              userInfo.bio ? (
                <p className="mt-2">{userInfo.bio}</p>
              ) : (
                <p className="mt-2">Full-Stack Developer | Open Source Contributor | Crypto Enthusiast</p>
              )
            }
            <div className="mt-4">
              {
                userInfo?.blog &&
                (
                  <>
                    <a href={userInfo.blog}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold hover:underline">Blog 📑</a> {` | `}
                  </>
                )
              }
              <span className="font-semibold">Followers:</span> {`${userInfo.followers} | `}
              <span className="font-semibold">Public Repos:</span> {userInfo.public_repos}
            </div>
          </section>

          <section id="repos" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Repositories</h2>
            <div id="repo-list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Repositories */}

              {
                repos.map(repo => (
                  <div key={repo.id} className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-semibold mb-2">
                      <a href={repo.html_url} className="text-blue-600 hover:underline">{repo.name}</a>
                    </h3>
                    <p className="text-gray-600">{repo.description}</p>
                    <p className="mt-2">
                      <span className="font-semibold">Language:</span> {repo.language || 'N/A'} <br></br>
                      <span className="font-semibold">Stars:</span> {repo.stargazers_count} <br></br>
                      <span className="font-semibold">Forks:</span> {repo.forks_count} <br></br>
                      <span className="font-semibold">Watchers:</span> {repo.watchers_count}
                    </p>
                    <p className="mt-1">
                      <span className="font-semibold">Open Issues:</span> {repo.open_issues_count} <br></br>
                      {
                        repo?.license?.name &&
                        <>
                          <span className="font-semibold">License:</span> {repo.license.name}
                        </>
                      }
                    </p>
                  </div>
                ))
              }

            </div>
          </section>
        </div>

        <footer id="contact" className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2">Contact Me</h3>
            {
              userInfo?.email &&
              <p>Email: <a href="mailto:your-email@example.com" className="text-blue-400 hover:underline">{userInfo.email}</a></p>
            }
            {
              userInfo?.twitter_username &&
              <p>Twitter: <a href={`https://twitter.com/${userInfo.twitter_username}`} className="text-blue-400 hover:underline">@{userInfo.twitter_username}</a></p>
            }
            <p>© 2024 Github_Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
