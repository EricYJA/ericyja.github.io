---
title: Git Util Doc
tags: 
  - util
---

This is my personal git util doc for recording useful but not often used operations. There are two parts of the Doc: The first part is for operations; The second part is for practical uses.  This Doc would also refresh my memory after not using git for a long time. 



### Operations 

---

##### Basic Operation

-  ```bash
  $ git add 
  $ git stage [-A] [-a]
  # Basically <add> and <stage> are the same, use <stage> for more accurate expression
  # [-A] [-all] add changes from all tracked and untracked files
  ```

- ```bash
  $ git rm [-f] [--cached]
  # rm for untrack the file in the repo and remove it
  # [-f] [--force]
  # [--cached] untrack the file in the repo w/o remove it
  ```

- ```bash
  $ git commit [-m] [--amend]
  # commit for commiting changes. Default adding messages in a using a command line editor
  # [-m <msg>] for basic commit operation
  # [--amend] for amend the previous commit
  ```

- ```bash
  $ git push
  ```

- ```bash
  $ git pull
  ```

- ```bash
  $ git branch <branch_name>
  ```

- ```bash
  $ git checkout [-b] <commit or branch>
  # [-b] for adding a new branch
  ```

##### Other

- ```bash
  $ ssh -T git@github.com
  # Test if your ssh key is set up
  ```



### Cases 

---

##### Hook up Github repo

1. Check the host name for local repo first

   ```bash
   $ git remote -v
   origin	https://github.com/EricYJA/mypage.git (fetch)
   origin	https://github.com/EricYJA/mypage.git (push)
   ```

2. Update the remote url

   Please take care of the format and the name

   ```bash
   $ git remote set-url origin git@github.com:EricYJA/mypage.git
   ```



- Please also note the usage of this git command

  ```bash
  $ git remote [-v | verbose]
  $ git remote set-url [--push] <name> <newurl> [<oldurl>]
  $ git remote set-url --add <name> <newurl>
  $ git remote set-url --delete <name> <url>
  ```

  Also, you can change the url mannually in file `.git/config`

  

  



