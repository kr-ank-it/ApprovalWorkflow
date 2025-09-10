using mysrvdemo as service from '../../srv/mysimplesrv';
using Lms as lmsservice from '../../srv/lmsservice';

annotate lmsservice.Students with @(
    UI.FieldGroup #BasicInfo : {
        $Type : 'UI.FieldGroupType',
        Data : [
            
            {
                $Type : 'UI.DataField',
                Label : 'First Name',
                Value : firstName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Last Name',
                Value : lastName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Email',
                Value : email,
            },
            {
                $Type : 'UI.DataField',
                Label: 'Sign up Date',
                Value : dateSignUp,
            }
        ],
    },
    UI.FieldGroup #AdditionalInfo : {
        $Type : 'UI.FieldGroupType',
        Data : [
            
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'Basic Information',
            Target : '@UI.FieldGroup#BasicInfo',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet2',
            Label : 'Enrollment Information',
            Target : '@UI.FieldGroup#AdditionalInfo',
        }
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Student Id',
            Value : ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Email',
            Value : email,
        },
        {
            $Type : 'UI.DataField',
            Label : 'First name',
            Value : firstName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Last name',
            Value : lastName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Date Joined',
            Value : dateSignUp,
        },
    ],
);




