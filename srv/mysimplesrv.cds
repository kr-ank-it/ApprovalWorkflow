using {approvalWorkflow.hrms as hrms} from '../db/Students';

service mysrvdemo {

    
    entity StudentSrv as projection on hrms.Students;

    function myfoobar() returns String;

    // function mytoobar() returns String;

}