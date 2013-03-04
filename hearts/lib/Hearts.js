//
// Autogenerated by Thrift Compiler (0.9.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = require('./hearts_types');
//HELPER FUNCTIONS AND STRUCTURES

Hearts_enter_arena_args = function(args) {
};
Hearts_enter_arena_args.prototype = {};
Hearts_enter_arena_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Hearts_enter_arena_args.prototype.write = function(output) {
  output.writeStructBegin('Hearts_enter_arena_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Hearts_enter_arena_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
Hearts_enter_arena_result.prototype = {};
Hearts_enter_arena_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.EntryResponse();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Hearts_enter_arena_result.prototype.write = function(output) {
  output.writeStructBegin('Hearts_enter_arena_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Hearts_get_game_info_args = function(args) {
  this.ticket = null;
  if (args) {
    if (args.ticket !== undefined) {
      this.ticket = args.ticket;
    }
  }
};
Hearts_get_game_info_args.prototype = {};
Hearts_get_game_info_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ticket = new ttypes.Ticket();
        this.ticket.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Hearts_get_game_info_args.prototype.write = function(output) {
  output.writeStructBegin('Hearts_get_game_info_args');
  if (this.ticket !== null && this.ticket !== undefined) {
    output.writeFieldBegin('ticket', Thrift.Type.STRUCT, 1);
    this.ticket.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Hearts_get_game_info_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
Hearts_get_game_info_result.prototype = {};
Hearts_get_game_info_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.GameInfo();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Hearts_get_game_info_result.prototype.write = function(output) {
  output.writeStructBegin('Hearts_get_game_info_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Hearts_get_hand_args = function(args) {
  this.ticket = null;
  if (args) {
    if (args.ticket !== undefined) {
      this.ticket = args.ticket;
    }
  }
};
Hearts_get_hand_args.prototype = {};
Hearts_get_hand_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ticket = new ttypes.Ticket();
        this.ticket.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Hearts_get_hand_args.prototype.write = function(output) {
  output.writeStructBegin('Hearts_get_hand_args');
  if (this.ticket !== null && this.ticket !== undefined) {
    output.writeFieldBegin('ticket', Thrift.Type.STRUCT, 1);
    this.ticket.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Hearts_get_hand_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
Hearts_get_hand_result.prototype = {};
Hearts_get_hand_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.success = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.Card();
          elem6.read(input);
          this.success.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Hearts_get_hand_result.prototype.write = function(output) {
  output.writeStructBegin('Hearts_get_hand_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter7 in this.success)
    {
      if (this.success.hasOwnProperty(iter7))
      {
        iter7 = this.success[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Hearts_pass_cards_args = function(args) {
  this.ticket = null;
  this.cards = null;
  if (args) {
    if (args.ticket !== undefined) {
      this.ticket = args.ticket;
    }
    if (args.cards !== undefined) {
      this.cards = args.cards;
    }
  }
};
Hearts_pass_cards_args.prototype = {};
Hearts_pass_cards_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ticket = new ttypes.Ticket();
        this.ticket.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.cards = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = new ttypes.Card();
          elem14.read(input);
          this.cards.push(elem14);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Hearts_pass_cards_args.prototype.write = function(output) {
  output.writeStructBegin('Hearts_pass_cards_args');
  if (this.ticket !== null && this.ticket !== undefined) {
    output.writeFieldBegin('ticket', Thrift.Type.STRUCT, 1);
    this.ticket.write(output);
    output.writeFieldEnd();
  }
  if (this.cards !== null && this.cards !== undefined) {
    output.writeFieldBegin('cards', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.cards.length);
    for (var iter15 in this.cards)
    {
      if (this.cards.hasOwnProperty(iter15))
      {
        iter15 = this.cards[iter15];
        iter15.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Hearts_pass_cards_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
Hearts_pass_cards_result.prototype = {};
Hearts_pass_cards_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size16 = 0;
        var _rtmp320;
        this.success = [];
        var _etype19 = 0;
        _rtmp320 = input.readListBegin();
        _etype19 = _rtmp320.etype;
        _size16 = _rtmp320.size;
        for (var _i21 = 0; _i21 < _size16; ++_i21)
        {
          var elem22 = null;
          elem22 = new ttypes.Card();
          elem22.read(input);
          this.success.push(elem22);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Hearts_pass_cards_result.prototype.write = function(output) {
  output.writeStructBegin('Hearts_pass_cards_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter23 in this.success)
    {
      if (this.success.hasOwnProperty(iter23))
      {
        iter23 = this.success[iter23];
        iter23.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

HeartsClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this.seqid = 0;
    this._reqs = {};
};
HeartsClient.prototype = {};
HeartsClient.prototype.enter_arena = function(callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_enter_arena();
};

HeartsClient.prototype.send_enter_arena = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('enter_arena', Thrift.MessageType.CALL, this.seqid);
  var args = new Hearts_enter_arena_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

HeartsClient.prototype.recv_enter_arena = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new Hearts_enter_arena_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('enter_arena failed: unknown result');
};
HeartsClient.prototype.get_game_info = function(ticket, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_get_game_info(ticket);
};

HeartsClient.prototype.send_get_game_info = function(ticket) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('get_game_info', Thrift.MessageType.CALL, this.seqid);
  var args = new Hearts_get_game_info_args();
  args.ticket = ticket;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

HeartsClient.prototype.recv_get_game_info = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new Hearts_get_game_info_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('get_game_info failed: unknown result');
};
HeartsClient.prototype.get_hand = function(ticket, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_get_hand(ticket);
};

HeartsClient.prototype.send_get_hand = function(ticket) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('get_hand', Thrift.MessageType.CALL, this.seqid);
  var args = new Hearts_get_hand_args();
  args.ticket = ticket;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

HeartsClient.prototype.recv_get_hand = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new Hearts_get_hand_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('get_hand failed: unknown result');
};
HeartsClient.prototype.pass_cards = function(ticket, cards, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_pass_cards(ticket, cards);
};

HeartsClient.prototype.send_pass_cards = function(ticket, cards) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('pass_cards', Thrift.MessageType.CALL, this.seqid);
  var args = new Hearts_pass_cards_args();
  args.ticket = ticket;
  args.cards = cards;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

HeartsClient.prototype.recv_pass_cards = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new Hearts_pass_cards_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('pass_cards failed: unknown result');
};
HeartsProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
HeartsProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.Exception, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

HeartsProcessor.prototype.process_enter_arena = function(seqid, input, output) {
  var args = new Hearts_enter_arena_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.enter_arena(function (err, result) {
    var result = new Hearts_enter_arena_result((err != null ? err : {success: result}));
    output.writeMessageBegin("enter_arena", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

HeartsProcessor.prototype.process_get_game_info = function(seqid, input, output) {
  var args = new Hearts_get_game_info_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.get_game_info(args.ticket, function (err, result) {
    var result = new Hearts_get_game_info_result((err != null ? err : {success: result}));
    output.writeMessageBegin("get_game_info", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

HeartsProcessor.prototype.process_get_hand = function(seqid, input, output) {
  var args = new Hearts_get_hand_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.get_hand(args.ticket, function (err, result) {
    var result = new Hearts_get_hand_result((err != null ? err : {success: result}));
    output.writeMessageBegin("get_hand", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

HeartsProcessor.prototype.process_pass_cards = function(seqid, input, output) {
  var args = new Hearts_pass_cards_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.pass_cards(args.ticket, args.cards, function (err, result) {
    var result = new Hearts_pass_cards_result((err != null ? err : {success: result}));
    output.writeMessageBegin("pass_cards", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

