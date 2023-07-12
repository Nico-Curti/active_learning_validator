# Active Semi-Supervised Learning Image Validator

This is just an utility script for the validation of images in active semi-supervised learning projects.

The script is written in HTML + JavaScript and therefore it should not require any external installation and/or configuration.
You can just download the entire directory and use it in any computer.

The software was tested under ![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white).
The software was tested on ![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white), ![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white), and ![Chrome](https://img.shields.io/badge/Chrome-yellow?style=for-the-badge) browsers.

You can easily manage the language of buttons and texts setting the `LANGUAGE` variable in [`function`](https://github.com/Nico-Curti/active_learning_validator/blob/main/static/function.js) script: the available languages are only *ita* and *eng* up to now.

> :warning: **NOTE:** The directory of images to validate **must** be included in the root folder of the project!

## Updates

<details><summary><b>Speech Recognition</b> - <i>Work in Progress</i></summary>
  <p>

  **04/05/2023**: with the help of [*Daniele Buschi*](https://github.com/Torbidos7), the new version of the software can be guided using [Speech Recognition](https://github.com/TalAter/annyang).
  The language settings can be customized using the `LANGUAGE` variable and the [`translation`](https://github.com/Nico-Curti/active_learning_validator/blob/main/static/translation.js) file of the project.
  The only browser which supports this function is *Google Chrome* and the use of an *http* server is mandatory.
  For a ready-to-use application of these new features we have provided the [`run.sh`](https://github.com/Nico-Curti/active_learning_validator/blob/main/run.sh) and [`run.ps1`](https://github.com/Nico-Curti/active_learning_validator/blob/main/run.ps1) scripts for the correct launch of the interface via command line.
  For their usage the support of `Python` is required!

  </p>
</details>


<details><summary><b>Valid/Invalid counters</b></summary>
  <p>

  **12/07/2023**: adding real-time counters for valid/invalid images to monitor the status of the validation online.
  This update could be useful to check the effectiveness of the current round of validation and also the rigidity of the validator itself...

  </p>
</details>

