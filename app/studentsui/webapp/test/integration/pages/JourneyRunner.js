sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"studentsui/test/integration/pages/StudentSrvList",
	"studentsui/test/integration/pages/StudentSrvObjectPage"
], function (JourneyRunner, StudentSrvList, StudentSrvObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('studentsui') + '/index.html',
        pages: {
			onTheStudentSrvList: StudentSrvList,
			onTheStudentSrvObjectPage: StudentSrvObjectPage
        },
        async: true
    });

    return runner;
});

