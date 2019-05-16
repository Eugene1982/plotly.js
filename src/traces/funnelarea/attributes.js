/**
* Copyright 2012-2019, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var pieAttrs = require('../pie/attributes');
var plotAttrs = require('../../plots/attributes');
var hovertemplateAttrs = require('../../components/fx/hovertemplate_attributes');
var domainAttrs = require('../../plots/domain').attributes;

var extendFlat = require('../../lib/extend').extendFlat;

module.exports = {
    labels: pieAttrs.labels,
    // equivalent of x0 and dx, if label is missing
    label0: pieAttrs.label0,
    dlabel: pieAttrs.dlabel,
    values: pieAttrs.values,
    marker: pieAttrs.marker,
    text: pieAttrs.text,
    hovertext: pieAttrs.hovertext,

    scalegroup: extendFlat({}, pieAttrs.scalegroup, {
        description: [
            'If there are multiple funnelareas that should be sized according to',
            'their totals, link them by providing a non-empty group id here',
            'shared by every trace in the same group.'
        ].join(' ')
    }),

    textinfo: extendFlat({}, pieAttrs.textinfo, {
        flags: ['label', 'text', 'value', 'percent']
    }),

    hoverinfo: extendFlat({}, plotAttrs.hoverinfo, {
        flags: ['label', 'text', 'value', 'percent', 'name']
    }),

    hovertemplate: hovertemplateAttrs({}, {
        keys: ['label', 'color', 'value', 'percent', 'text']
    }),

    textfont: pieAttrs.textfont,
    insidetextfont: pieAttrs.insidetextfont,
    outsidetextfont: pieAttrs.outsidetextfont,

    domain: domainAttrs({name: 'funnelarea', trace: true, editType: 'calc'}),

    angle: {
        valType: 'number',
        role: 'style',
        min: 15,
        max: 120,
        dflt: 45,
        editType: 'plot',
        description: [
            'Sets the angle.'
        ].join(' ')
    },

    baseratio: {
        valType: 'number',
        role: 'style',
        min: 0,
        max: 1,
        dflt: 1 / 3,
        editType: 'plot',
        description: [
            'Sets the base ratio to the top.'
        ].join(' ')
    },

    sort: extendFlat({}, pieAttrs.sort, { dflt: false })
};
