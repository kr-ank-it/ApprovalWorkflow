using {cuid, managed} from '@sap/cds/common';

namespace approvalworkflow.lms;

entity Students : cuid, managed {
    @unique
    email: String;
    firstName: String;
    lastName: String;
    dateSignUp: type of managed: createdAt;
    enrollment: Association to many Enrollments on enrollment.student = $self;
}

entity Courses: cuid, managed{
    name: String;
    duration:DecimalFloat;
    price:Decimal(5, 2);
    published:Boolean;
    content: Association to many Contents on content.course = $self;
    enrollment: Association to many Enrollments on enrollment.course = $self;
}

entity Contents: cuid, managed{
    url: String(2048);
    date_published: type of managed: createdAt;
    contentType: String;
    course: Association to Courses;
}

entity Enrollments: cuid, managed{
    course: Association to Courses;
    student: Association to Students
}