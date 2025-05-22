---
title: "apexlogs"
description: "Simple terminal UI for viewing Salesforce logs"
date: "Aug 01 2024"
repoURL: "https://github.com/markhorn-dev/astro-sphere"
---

## Building apexlogs: A Terminal UI for Salesforce Developers

### The Pain of Salesforce Development

Anyone who’s worked with Salesforce knows the pain of debugging Apex code. The
standard process typically involves navigating through Salesforce's Setup UI,
configuring debug levels, setting trace flags, executing code, and then hunting
through the Developer Console to find and analyze logs.

This workflow is not only time-consuming but also disconnects you from your
normal development environment. I wanted a better solution that would allow me
to stay in my terminal, where I do most of my work anyway.

### Introducing apexlogs

That's why I created [apexlogs](https://github.com/cdelmoral/apexlogs) - a
minimal terminal UI application that brings Salesforce log viewing directly to
your command line. With apexlogs, you can:

- View logs directly in your terminal
- Automatically create the required debug level and trace flag records
- Quickly fetch and refresh logs
- Navigate through logs with an intuitive keyboard-driven interface

![Demo of apexlogs in action](/content/projects/apexlogs/demo.gif)

### How It Works

Under the hood, apexlogs uses the Salesforce CLI to authenticate with your
Salesforce org and then makes direct API calls to fetch logs and manage debug
configurations.

The application is built in Go, leveraging the excellent
[Bubble Tea](https://github.com/charmbracelet/bubbletea) library to create a
polished terminal UI. Bubble Tea implements the Elm architecture, which provides
a clean separation of concerns between:

- Model (state of the application)
- View (how the state is rendered to the terminal)
- Update (how the state changes in response to messages)

When you launch apexlogs, it:

1. Finds your authenticated Salesforce CLI org
2. Creates or updates the required debug level with appropriate settings
3. Creates or refreshes a trace flag for your user
4. Fetches existing logs
5. Presents them in a navigable table view

Selecting a log displays its contents in a viewport that supports scrolling,
search, and other navigation features. The split-screen design keeps your log
list easily accessible while viewing log details.

### Design Choices

Building a terminal UI application comes with unique challenges and
opportunities. Here are some key design decisions I made:

#### Go Language

I chose Go for its simplicity, strong standard library, and excellent
cross-platform support. Go makes it easy to compile standalone binaries that
users can run without dependencies, which simplifies distribution.

#### Bubble Tea Framework

After evaluating several TUI frameworks, I settled on Charm's Bubble Tea for its
elegant architecture and rich component library. Its implementation of the Elm
architecture makes it easy to manage state and events in a predictable way.

#### Split-Screen Interface

The dual-panel design (logs list + log contents) was inspired by classic tools
like Vim and Emacs. This allows users to maintain context while diving into
details - a critical feature when debugging complex code flows.

#### Keyboard-Driven Navigation

In the terminal, mouse support can be inconsistent across platforms. By focusing
on keyboard shortcuts, apexlogs provides a consistent experience across
different environments while keeping the developer's hands on the keyboard.

#### Minimal Configuration

Rather than requiring users to manage complex configuration files, apexlogs is
designed to "just work" within a Salesforce project directory. It uses the
Salesforce CLI's existing authentication and org configuration, reducing
cognitive overhead.

### How to Use apexlogs

Getting started with apexlogs is straightforward:

1. Install the
   [Salesforce CLI](https://developer.salesforce.com/tools/salesforcecli) if you
   haven't already
2. Install apexlogs using Homebrew: `brew install cdelmoral/tap/apexlogs` or
   with Go: `go install github.com/cdelmoral/apexlogs`
3. Navigate to your Salesforce project directory in your terminal
4. Configure your default org if needed:
   `sf config set target-org my-scratch-org-alias`
5. Run `apexlogs`

Once launched, you can use the following keyboard shortcuts:

- Tab: Switch between logs list and log viewer
- Enter: View the selected log
- r: Refresh logs
- ?: Toggle help view
- q: Quit

### What's Next for apexlogs

This is just a pet project I built to solve my own frustrations with Salesforce
development. While I'm not actively planning updates, there are several features
and architectural improvements I'd ideally include if I had unlimited time:

#### Features

- Advanced log filtering by type, user, and time
- Support for custom debug levels
- Log highlighting and folding for better readability
- Search functionality within logs
- Better handling of large logs
- AI-powered features like automatic log summarization

#### Structural Improvements

- **Command-line Framework**: Integrating a robust CLI framework like Cobra for
  better command-line options, subcommands, and help documentation
- **Configuration Management**: Implementing Viper for flexible configuration
  via files, environment variables, and command-line flags
- **Structured Logging**: Replacing the basic logging with a structured logging
  system like Zap for better observability
- **Dependency Injection**: Refactoring to use interfaces and dependency
  injection for better testability and maintainability
- **Repository Pattern**: Implementing a repository layer to abstract data
  access operations
- **Context Support**: Adding context.Context to all HTTP operations for better
  timeout and cancellation handling
- **Build Automation**: Adding a Makefile for consistent build, test, and lint
  operations
- **Comprehensive Testing**: Expanding test coverage with mocks and integration
  tests
- **Error Handling**: Implementing more robust and informative error handling
  throughout the codebase

These improvements would transform apexlogs from a useful personal tool into a
more professional, maintainable, and scalable application that could potentially
serve as a foundation for a broader set of Salesforce development tools.

### Lessons Learned

Building apexlogs has taught me a lot about Go, terminal UI development, and the
Salesforce API. Some key takeaways:

1. Terminal UI applications can provide a surprisingly rich user experience with
   the right design
2. The Elm architecture simplifies state management in interactive applications
3. Working with APIs directly gives you more control than using wrapper
   libraries
4. Designing for keyboard efficiency pays dividends in developer productivity

### Get Involved

If you're a Salesforce developer frustrated with the current debugging workflow,
I invite you to try apexlogs and experience a more streamlined approach to log
analysis.

The project is open source, and I'd be happy to see others use it! Visit the
[GitHub repository](https://github.com/cdelmoral/apexlogs) to download or star
the project.

Let me know what you think! You can reach me on
[GitHub](https://github.com/cdelmoral) or
[Linkedin](https://linkedin.com/in/cdelmoralronda)

Happy debugging!
