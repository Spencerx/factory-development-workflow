window.dialog = function(title, content) {
  if ($("#dialog").is(":visible")) {
    $("#dialog").html(content);
    $("span.ui-dialog-title").html(title);
  } else {
    $("#dialog").remove();
    $("body").append("<div id=\"dialog\" title=\"" + title + "\">\n" + content + "</div>");
    $("#dialog").dialog();
  }
}

window.titles = {
  // Actions and conditions
  packagedevel: "Package development",
  createsr: "Create SR",
  acceptsr: "Accept Submit Request",
  develprojectint: "Devel Project Integration",
  createsrfactory: "Create SR to Factory",
  autolegal: "Auto Legal",
  rpmlint: "rpmlint",
  checkrepo: "Repo Checker",
  needsstaging: "Needs Staging",
  stagingprojectint: "Staging Project Integration",
  createsrgroup: "Create SR Groups",
  mergedevel: "Merge in Devel Project",
  needsqa: "Needs QA",
  preinttest: "Pre Integration Test",
  legalreview: "Legal Review",
  rpmlint2: "rpmlint",
  technicalrev: "Technical Review",
  acceptsr2: "Accept Submit Request",
  factoryint: "Factory Integration",
  integrationtest: "Integration Test",
  bugreport: "Bug Report",
  factorytested: "Factory Tested",
  createiso: "Create ISO",
  factoryiso: "Factory ISO",
  // Roles
  coordinator: "Coordinator",
  factorymaintainer: "Factory Maintainer",
  legalreviewer: "Legal Reviewer",
  securityreviewer: "Security Reviewer",
  technicalreviewer: "Technical Reviewer",
  qateam: "QA Team",
  projectmaintainer: "Project Maintainer",
  packagemaintainer: "Package Maintainer"
}

window.descriptions = {
  packagedevel: "<ul><li><strong>Type:</strong> Starting Point. Action</li><li><strong>Role:</strong> Package Maintainer</li></ul><p>A package is usually developed in a Home Project. We can consider that this is the starting poing for this workflow, together with the Devel Project Integration task.</p><p>With OBS, a contributor can make a local branch (usually from a Devel Project) of the package to start working on it. Once the developer finish with the package, he needs to create a Submit Request before he can send it to the corresponding Devel Project.</p>This is usually how packages are being developed: They start in home project, move from there to devel project and from there to Factory.</p>",

  createsr: "<ul><li><strong>Type:</strong>Action</li><li><strong>Role:</strong> Package Maintainer</li></ul><p>A Submit Request is a formal petition of integration from one project to another. This object also capture all the changes made in the package, with all the meta information related with this petition (history of approvals, current status, etc).</p><p>If the developer want to include the updated version of the package, she / he needs to create a formal petition via this SR. We also have policies that describe what extra actions needs to be done when the developer want to add a new package from Factory.</p>",

  acceptsr: "<ul><li><strong>Type:</strong> Condition</li><li><strong>Role:</strong> Project Maintainer</li></ul><p>The Project Maintainer can decide to accept or reject the SR according to technical decisions.</p><p>This decision is expressed via OBS and usually the rejection is justified to the original developer, in order to give to her / him a new chance to resubmit the package.</p>",

  develprojectint: "<ul><li><strong>Type:</strong> Starting Point. Action</li><li><strong>Role:</strong> Project Maintainer</li></ul><p>The integration can be defined as the process of merging all packages together in a single tree, creating a consistent whole inside the Devel Project.</p><p>This integration can have two different origins: one made directly by the Project Maintainer i</p>",

  createsrfactory: "<ul><li><strong>Type:</strong> Action</li><li><strong>Role:</strong> Project Maintainer</li></ul><p>Create the SR (or group of SR) to be integrated into Factory </p>",
  autolegal: "<ul><li><strong>Type:</strong> Condition</li><li><strong>Role:</strong> Legal Reviewer (Bot)</li></ul><p>The boot osc-legal.py check if the package referenced in the SR had a compatible license or if this package was previously approved. If none of these conditions are meet, the bot can reject the SR and wait for a manual review later in the process.</p>",
  rpmlint: "<ul><li><strong>Type:</strong> Condition</li><li><strong>Role:</strong> Security Reviewer (Bot)</li></ul><p>Attached to the submit process, there is a bot that check the basic security conditions of the package, like SUID permissions.</p>",
  checkrepo: "<ul><li><strong>Type:</strong> Condition</li><li><strong>Role:</strong> Technical Reviewer (Bot)</li></ul><p>There is a automatic technical review process for every new SR to Factory. This review look for potential problems before the integration, like expanding the Base:System, disabled repositories, new version of the packages or introducing cycles in the dependencies</p>",
  needsstaging: "<ul><li><strong>Type:</strong> Condition</li><li><strong>Role:</strong> Technical Reviewer</li></ul><p>Some packages (or groups of packages) need more effort to be integrated into Factory. For example, a new update of GCC can demand some work to another packages that do not compile using the new compiler without modification.</p><p>For those packages is a good idea 'fork' Factory, integrating an initial version of the new package together with the all affected packages. Now the developers can work on the integration of all those components. This is the main reason of the staging project.</p><p>But someone needs to make a decision about the kind of projects that needs a staging project, because the creation of a staging project from scratch is expensive. To avoid the waste of resources we will create a pool of staging projects that need to be assigned and prepared by the Technical Reviewer. In case of necessity the Factory Maintainer can create new staging projects.</p>",
  stagingprojectint: "<ul><li><strong>Type:</strong> Action</li><li><strong>Role:</strong> Project Maintainer</li></ul><p>How are requests being managed in staging project.</p><p>They start as a sumbission to factory that is deemed to require new staging project creation or that they are part of already existing request.</p><p>They are then being developed on specific branch of openSUSE:Factory where the designated maintainer with package maintainers fix the issues to have everything working just fine.</p><p>Whenever the developers see fit they can sent the staging changes back to devel projects.</p><p>When the packages are seemingly fine the staging project gets dismantled and all requests in group get forwarded further on in review cycle for Factory submissions.</p>",
  createsrgroup: "<ul><li><strong>Type:</strong> Action</li><li><strong>Role:</strong> Project Maintainer</li></ul><p>How are requests being managed in staging project.</p><p>They start as a sumbission to factory that is deemed to require new staging project creation or that they are part of already existing request.</p><p>They are then being developed on specific branch of openSUSE:Factory where the designated maintainer with package maintainers fix the issues to have everything working just fine.</p><p>Whenever the developers see fit they can sent the staging changes back to devel projects.</p><p>When the packages are seemingly fine the staging project gets dismantled and all requests in group get forwarded further on in review cycle for Factory submissions.</p>",
  mergedevel: "<ul><li><strong>Type:</strong> Condition</li><li><strong>Role:</strong> Project Maintainer</li></ul><p>How are requests being managed in staging project.</p><p>They start as a sumbission to factory that is deemed to require new staging project creation or that they are part of already existing request.</p><p>They are then being developed on specific branch of openSUSE:Factory where the designated maintainer with package maintainers fix the issues to have everything working just fine.</p><p>Whenever the developers see fit they can sent the staging changes back to devel projects.</p><p>When the packages are seemingly fine the staging project gets dismantled and all requests in group get forwarded further on in review cycle for Factory submissions.</p>",
  needsqa: "<ul><li><strong>Type:</strong> Condition</li><li><strong>Role:</strong> Technical Reviewer</li></ul><p>There are some packages, like the GNU/Linux kernel, that are good candidates for automatic testing before the integration into Factory. Good candidates are packages that can put the system in a very unreliable situation (for example, they can't boot anymore or can disable the access to the network).</p><p>In this task the Technical Reviewer need to identify such packages in order to demand a pre integration test from the QA Team.</p>",
  preinttest: "<ul><li><strong>Type:</strong> Condition</li><li><strong>Role:</strong> QA Team</li></ul><p>Process to check whether is safe enough to integrate a set of changes into Factory.</p>",
  legalreview: "<ul><li><strong>Type:</strong> Condition</li><li><strong>Role:</strong> Legal Reviewer</li></ul><p>During the legal review the package which didn't pass the automatic checks is inspected by legal reviewer. License is verified to match and the code is inspected if there are not in fact some infridgements. Also usage of patented processes and similar problems are verfied.</p><p>This review is automatically put in place for all new packages</p>",
  rpmlint2: "<ul><li><strong>Type:</strong> Condition</li><li><strong>Role:</strong> Security Reviewer</li></ul><p>Attached to the submit process, there is a bot that check the basic security conditions of the package, like SUID permissions. If there is any problem, the Security Reviewer can help to the developer to review manually the package and provide advice to fix the potential security issue.</p>",
  technicalrev: "<ul><li><strong>Type:</strong> Condition</li><li><strong>Role:</strong> Technical Reviewer</li></ul><p>Technical review is formal verification that the submission is up-par with regards to all the formatting norms for changelog and spec files.</p><p>During the review the code is also verified not to contain any unforseen consequences.</p>",
  acceptsr2: "<ul><li><strong>Type:</strong> Condition</li><li><strong>Role:</strong> Factory Maintainer</li></ul><p>The process of merging all packages together in a single tree, creating a consistent whole.</p>",
  factoryint: "<ul><li><strong>Type:</strong> Action</li><li><strong>Role:</strong> Factory Maintainer</li></ul><p>Continuous process to ensure that Factory is solid enough to be used in a daily basis by contributors and for creating Factory-Tested and the ISOs.</p>",
  integrationtest: "<ul><li><strong>Type:</strong> Condition</li><li><strong>Role:</strong> QA Team</li></ul><p>Integration tests are done by QA Team when a new SR is integrated in Factory and need to be tested before pass to Factory-Tested. When the Factory Maintainer integrates a new SR, there is a good possibility that some part of the system stop working. The Integration Test is designed to assure that the integration of a new package doesn't affect the functionality of a different package in a unnoticed way.</p><p>To provide this, QA Team will run a set of transversal tests along the full distribution, to make sure that the system work in a similar way previous the integration step.</p><p>This task also decides if the new SR that comes from Factory go to the next step until Factory-Tested. If QA Team detect an important issue related with the new SR, they can decline the copy of the new package (or group of packages) to Factory-Tested.</p>",
  bugreport: "<ul><li><strong>Type:</strong> Action</li><li><strong>Role:</strong> QA Team</li></ul><p>The Integration Test task can detect errors in the distribution, and as a result of that QA Team needs to fill a bug report. This bug report needs to be precise and detailed to make easy the work for the developer.</p><p>Sometimes the bug reported needs to be tracked to avoid regressions. In this case the QA Teams needs also incorporate a new test case in the tool to detect them.</p>",
  factorytested: "<ul><li><strong>Type:</strong> Action</li><li><strong>Role:</strong> Factory Maintainer</li></ul>",
  createiso: "<ul><li><strong>Type:</strong> Condition</li><li><strong>Role:</strong> Coordinator</li></ul>",
  factoryiso: "<ul><li><strong>Type:</strong> Action</li><li><strong>Role:</strong> Factory Maintainer</li></ul>",

  coordinator: "<ul><li><strong>Type:</strong> Role</li><li><strong>Current role:</strong> Release Manager</li></ul><p>The person for this role will be one individual selected from the <strong>Factory maintainer</strong> role.</p><p>Previously this role was more broad and with more tasks. But due to the automation in place the Coordinator will be just responsible for reviewing the ISO after all previous steps were completed.</p>",

  factorymaintainer: "<ul><li><strong>Type:</strong> Role</li><li><strong>Current role:</strong> Factory maintainers</li></ul><p><ul><li>Does final review and merge to Factory integration project.</li><li>Has access to all devel projects in order to make sure needed changes are done.</li><li>Does keep in mind overall state of Factory state and merge according to it.</li></ul></p>",
  legalreviewer: "<ul><li><strong>Type:</strong> Role</li><li><strong>Current role:</strong> Legal team</li></ul><p><ul><li>Checks whether we can legally distribute a package.</li><li>Reviews whether declared license is correct and looks for possible conflicting licenses.</li><li>Checks license changes among packages.</li></ul></p>",
  securityreviewer: "<ul><li><strong>Type:</strong> Role</li><li><strong>Current role:</strong> Security team</li></ul><p><ul><li>Reviews packages for special privileges (suid, capabilities, dbus, ...), without their approval, nothing in Factory can be included with those.</li><li>Reports possible security issues.</li><li>Introduces new policies to harden the openSUSE.</li></ul></p>",
  technicalreviewer: "<ul><li><strong>Type:</strong> Role</li><li><strong>Role:</strong>Technical Reviewer</li><li><strong>Current role:</strong> Technical Reviewer</li></ul><p>Reviews submissions to the Factory to make sure they follow packaging guidelines and doesn't contain obvious errors.</p><p>Newly technical reviewer also groups packages related to each other (think new KDE) that are going to get accepted all together.</p><p>He/she also decides, when the change might have a big enough impact to run it through staging project first (new autotools, boost, gcc, icu, ...) or when the change is big and might seriously broke things for people in runtime so it needs openQA run (think new Xorg, new systemd, ...)",
  qateam: "<ul><li><strong>Type:</strong> Role</li><li><strong>Role:</strong>QA Team</li><li><strong>Current role:</strong> none</li></ul><p>Team of people who watch over automatic tests and try to maintain them and adjust them whenever needed.</p>",
  projectmaintainer: "<ul><li><strong>Type:</strong> Role</li><li><strong>Role:</strong>Project maintainer</li><li><strong>Current role:</strong> Project Maintainer</li></ul><p>Somebody who reviews SRs comming to the devel project and pushes them forward when needed. Almost always also package maintainer.</p><p>Project maintainer can be also maintainer of temporal staging project that gets created when some major change is on way to factory. Here he has to fix packages/ping package maintainer to fix packages and propagate them back to the devel project.</p>",
  packagemaintainer: "<ul><li><strong>Type:</strong> Role</li><li><strong>Role:</strong>Package maintainer</li><li><strong>Current role:</strong> Package Maintainer</li></ul><p>Somebody who creates, fixes or changes individual package, probably will overlap with project maintainer in quite some cases.</p>"
}

window.explain = function(id) {
  if (descriptions.hasOwnProperty(id)) {
    dialog(titles[id], descriptions[id]);
  }
  return true;
}
