## Git and GitHub Set Up 
<details><summary>Click to open or close</summary>
   
1. Install Git
   - On Mac:
      1. Open the terminal
      2. Type `git --version`
      3. A pop will appear. Accept everything.
   - On Windows: 
      1. [Download Git](https://git-scm.com/download/win)
      2. Run the installation package
      3. Leave all the default installation settings as is.
   - Wait for installation to finish
2. Test Git installation
   1. Open terminal
   2. Type `git --version`
   3. If you see a version number, it worked!
3. Connect your GitHub Account
   1. Enter the following: `git config --global user.name "Your Name"`
   2. Replace `Your Name` with your gitHub username
   3. For example, mine would look like this `git config --global user.name "anaisbarja"`
   4. Enter the following: `git config --global user.email "you@example.com"`
   5. Replace `you@example.com` with the email address connected to your GitHub
4. Set up GitHub SSH Connection 
   1. [Follow this official guide from GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh)
   2. VERY IMPORTANT if you are going to enter a passphrase( a.k.a. password ) per the instruction, you need to REMEMBER it as you will need it very often 
5. Test GitHub Account connection
   1. Open terminal on your class folder 
   2. Paste the following and then hit ENTER:

   ```bash
   git clone git@github.com:FullstackAcademy/2209-FTB-MT-WEB-PT.git
   ```
   3. It will ask you to enter your passphrase: Hit Enter if you did not create any password from Step 4, and skipped the next step, otherwise, follow the next step. 
   4. Enter your password, it will appear as you are not typing anything but you can just finish typing the password and then hit ENTER.  
   5. Once it is finished downloading, type `ls` and hit Enter 
   6. You should be able to see our cohort folder on your local computer 
</details>
